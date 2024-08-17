"use server";

import { createHistory } from "@/services/history";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

export default async function playSongAction(songId: string) {
  const res = await createHistory(songId);

  if (res.error && res.error.statusCode === 401) {
    redirect("/login");
  }

  revalidatePath("/");

  if (res?.songUrl) {
    redirect(res.songUrl);
  }
}
