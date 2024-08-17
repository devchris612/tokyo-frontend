import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  cookies().delete("jwt");
  // revalidatePath("/");
  await revalidatePath("/", "layout");
  await revalidatePath("/login");
  redirect("/login");
}
