"use server";

import { forgotPassword, resetPassword } from "@/services/users";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function changePasswordAction(
  prevState: unknown,
  formData: FormData
): Promise<any> {
  const forgotSchema = z.object({
    email: z.string().min(1, { message: "Vui lòng nhập email" }),
    old_pw: z.string().min(1, { message: "Vui lòng nhập mật khẩu cũ" }),
    new_pw: z.string().min(1, { message: "Vui lòng nhập mật khẩu mới" }),
    cf_new_pw: z.string().min(1, { message: "Vui lòng nhập lại mật khẩu mới" }),
  });

  const result = forgotSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const { email, old_pw, new_pw, cf_new_pw } = result.data;
  try {
    await resetPassword(email, old_pw, new_pw, cf_new_pw);
  } catch (error: any) {
    return {
      all: error?.response?.data?.message ?? "Server error",
    };
  }

  redirect("/login?reset=success");
}
