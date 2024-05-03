"use server";

import { authAction } from "@/src/lib/safeAction";
import APIS from "@/src/constants/apis";
import verifySchema from "@/src/schema/verifySchema";

import fetcher from "@/src/lib/fetcher";

export const verifyAction = authAction(
  verifySchema,
  async (schema): Promise<{ status: boolean; message: string }> => {
    const payload = new FormData();

    for (let [key, value] of Object.entries(schema)) {
      payload.set(key, value);
    }

    const res = await fetcher<SignupRes, SignupRes>(
      APIS.register,
      payload,
      "POST"
    );

    const { ok, message } = res;

    return {
      status: ok,
      message,
    };
  }
);
