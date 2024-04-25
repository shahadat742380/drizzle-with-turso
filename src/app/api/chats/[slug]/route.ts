// import db
import db from "@/db";
import { chats } from "@/db/schema";

// import schema

// import core packages
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// Define the structure for your route parameters
interface RouteParams {
  slug: number;
}

// Delete single chat
export const DELETE = async (req: Request, params: { params: RouteParams }) => {
  const slug = params.params.slug;
//   console.log(slug, typeof slug);

  try {
    const deleteChats = await db
      .delete(chats)
      .where(eq(chats.id, slug))
      .returning();
    return NextResponse.json(deleteChats, { status: 200 });
  } catch (error: any) {
    // console.log(error.message);
    return NextResponse.json(error.message, { status: 500 });
  }
};

// ** update single chat
export const PUT = async (req: Request, params: { params: RouteParams }) => {
  const body = await req.json();
  const slug = params.params.slug;

  try {
    const updateChat = await db
      .update(chats)
      .set({
        email: body.email,
        subject: body.subject,
        title: body.title,
        description: body.description,
      })
      .where(eq(chats.id, slug))
      .returning();

    return NextResponse.json(updateChat, { status: 500 });
  } catch (error: any) {
    // console.log(error.message);
    return NextResponse.json(error.message, { status: 500 });
  }
};
