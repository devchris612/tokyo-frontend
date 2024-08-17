"use server";

import { forgotPassword } from "@/services/users";
import { z } from "zod";

export async function forgotPasswordAction(
  prevState: unknown,
  formData: FormData
): Promise<any> {
  try {
    const forgotSchema = z.object({
      email: z.string().min(1, { message: "Vui lòng điền email" }),
    });

    const result = forgotSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (result.success === false) {
      return result.error.formErrors.fieldErrors;
    }

    const { email } = result.data;

    const data = await forgotPassword(email);
    return data;
  } catch (error: any) {
    return {
      all: error.response.data.message,
    };
  }
}
