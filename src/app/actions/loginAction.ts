"use server";

import { handleLogin } from "@/services/auth";
import { getUser } from "@/services/users";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function loginAction(
  prevState: any,
  formData: FormData
): Promise<any> {
  try {
    const addSchema = z.object({
      email: z.string().min(1, { message: "Vui lòng điền email" }),
      password: z.string().min(1, { message: "Vui lòng điền password" }),
    });

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

    if (result.success === false) {
      return result.error.formErrors.fieldErrors;
    }

    const { email, password } = result.data;

    const data = await handleLogin(email, password);
    const { access_token } = data;
    cookies().set("jwt", access_token);
  } catch (error: any) {
    return {
      authError: error?.response?.data,
    };
  }
  revalidatePath("/");
  redirect("/");
}
