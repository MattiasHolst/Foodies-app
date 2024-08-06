"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title") as string,
    image: formData.get("image") as File,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    slug: "",
    id: "",
    path: "",
  };

  await saveMeal(meal);
  redirect("/meals");
}
