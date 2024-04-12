"use server";

import APIS from "@/src/constants/apis";
import { formDataToObject } from "@/src/lib/utils";
import { signupSchema, loginSchema } from "@/src/lib/validations";
import { cookies } from "next/headers";
import data from "@/public/data/data.json";

export async function login(
  _: {
    success: boolean;
    signupMessage?: string;
    error?: string;
  },
  formData: FormData
) {
  const {
    auth: {
      signup: {
        errors: { unauthorized },
      },
    },
  } = data;

  try {
    await loginSchema.validate(formDataToObject(formData));

    const res = await fetch(APIS.login, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      cookies().set("token", data.access_token, { maxAge: data.expires_in });
      return {
        success: true,
        signupMessage: data.message,
      };
    } else {
      throw new Error(unauthorized);
    }
  } catch (err) {
    return {
      error: (err as { message: string }).message,
      success: false,
    };
  }
}

export async function signup(
  _: {
    success: boolean;
    signupMessage?: string;
    error?: string;
  },
  formData: FormData
) {
  try {
    await signupSchema.validate(formDataToObject(formData));

    const res = await fetch(APIS.register, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.status) {
      cookies().set("token", data.access_token, { maxAge: data.expires_in });
      return {
        success: true,
        signupMessage: data.message,
      };
    } else {
      return {
        success: false,
        signupMessage: data.message,
      };
    }
  } catch (err) {
    return {
      error: (err as { message: string }).message,
      success: false,
    };
  }
}
