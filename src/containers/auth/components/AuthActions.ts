"use server";

import { authAction } from "@/src/lib/safeAction";
import APIS from "@/src/constants/apis";
import {
  signupSchema,
  loginSchema,
  resetSchema,
  codeSchema,
} from "@/src/schema/authSchema";
import { cookies } from "next/headers";
import fetcher from "@/src/lib/fetcher";
import data from "@/public/data/queries.json";

export const loginAction = authAction(
  loginSchema,
  async (schema): Promise<{ status: boolean; message: string }> => {
    const {
      auth: {
        login: { success, error },
      },
    } = data;

    const payload = new FormData();

    for (let [key, value] of Object.entries(schema)) {
      payload.set(key, value);
    }

    const res = await fetcher<LoginRes, LoginResErr>(
      APIS.login,
      "POST",
      payload
    );

    const { ok } = res;

    if (ok) {
      const { access_token, expires_in } = res as LoginRes;

      cookies().set("token", access_token, {
        // maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: expires_in,
      });

      return {
        status: ok,
        message: success,
      };
    }

    return {
      status: ok,
      message: error,
    };
  }
);

export const signupAction = authAction(
  signupSchema,
  async (schema): Promise<{ status: boolean; message: string }> => {
    const payload = new FormData();

    for (let [key, value] of Object.entries(schema)) {
      payload.set(key, value);
    }

    const res = await fetcher<SignupRes, SignupRes>(
      APIS.register,

      "POST",
      payload
    );

    const { ok, message } = res;

    return {
      status: ok,
      message,
    };
  }
);

export const sendCodeAction = authAction(
  resetSchema,
  async (schema): Promise<{ status: boolean; message: string }> => {
    const payload = new FormData();

    payload.set("mobile", schema.mobile);

    const res = await fetcher<SignupRes, SignupRes>(
      APIS.reset,
      "POST",
      payload
    );

    const { ok, message } = res;

    return {
      status: ok,
      message,
    };
  }
);

export const OTPAction = authAction(
  codeSchema,
  async (schema): Promise<{ status: boolean; message: string }> => {
    const { mobile, code } = schema;

    const res = await fetcher<ResetCodeRes, ResetCodeRes>(
      `${APIS.resetCode}?mobile=${mobile}&code=${code}`
    );

    const { ok, message } = res;

    return {
      status: ok,
      message,
    };
  }
);
