"use server";
import { removeHistory } from "@/services/history";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function clearHistoryAction(userId: string) {
  const res = await removeHistory(userId);

  if (res.error && res.error.statusCode === 401) {
    redirect("/login");
  }

  revalidatePath("/");
}
