import APIS from "@/src/constants/apis";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formData: FormData) {
  "use server";

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
    };
  }

  redirect("/panel/dashboard");
}

export async function signup(formData: FormData) {
  "use server";

  try {
    const res = await fetch(APIS.register, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      cookies().set("token", data.access_token, { maxAge: data.expires_in });
    }

    if (!res.ok) throw new Error(data.error);
  } catch (err) {
    return {
      message: (err as { message: string }).message,
    };
  }

  redirect("/auth/login");
}
