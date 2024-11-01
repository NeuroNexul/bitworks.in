import { auth } from "@/auth/auth.config";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "admin") {
    return redirect("/login");
  }

  return children;
}
