export async function login(formData: FormData) {
  "use server";

  const rawFormData = {
    mobile: formData.get("mobile"),
    password: formData.get("password"),
  };
}

export async function signup(formData: FormData) {
  "use server";

  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  };
}
