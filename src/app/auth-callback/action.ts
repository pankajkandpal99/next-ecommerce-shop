"use server";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthStatus = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user?.id || !user.email) {
    throw new Error("Invalid user data");
  }

  const existingUser = await db.user.findFirst({
    where: { id: user.id },
  });

  if (!existingUser) {
    console.log("user doesn't exist");
    await db.user.create({
      data: {
        id: user.id,
        email: user.email,
      },
    });
  } else {
    console.log("user already exists");
  }

  return { success: true };
};
