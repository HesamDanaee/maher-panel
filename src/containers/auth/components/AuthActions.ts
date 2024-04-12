"use server";

import APIS from "@/src/constants/apis";
import { formDataToObject } from "@/src/lib/utils";
import { signupSchema } from "@/src/lib/validations";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(
  _: {
    message: string;
    error: any;
  },
  formData: FormData
) {
  try {
    const res = await fetch(APIS.login, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      cookies().set("token", data.access_token, { maxAge: data.expires_in });
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    return {
      message: (err as { message: string }).message,
      error: null,
    };
  }

  redirect("/panel/dashboard/invoice");
}

export async function signup(
  _: {
    message: string;
    success: boolean;
  },
  formData: FormData
) {
  try {
    const res = await fetch(APIS.register, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      cookies().set("token", data.access_token, { maxAge: data.expires_in });
      return {
        message: "",
        success: true,
      };
    }

    if (!res.ok) throw new Error(data.error);
  } catch (err) {
    return {
      message: (err as { message: string }).message,
      success: false,
    };
  }

  redirect("/auth/login");
}
