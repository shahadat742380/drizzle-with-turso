// import db
import db from "@/db";

// import schema
import { messages } from "@/db/schema";

// import core packages
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// Define the structure for your route parameters
interface RouteParams {
  slug: number;
}

export const DELETE = async (req: Request, params: { params: RouteParams }) => {
  const slug = params.params.slug;
  console.log(slug, typeof slug);

  try {
    const deleteMessage = await db
      .delete(messages)
      .where(eq(messages.id, slug))
      .returning();
    // console.log(deleteMessage);
    return NextResponse.json(deleteMessage, { status: 200 });
  } catch (error: any) {
    // console.log(error.message);
    return NextResponse.json(error.message, { status: 500 });
  }
};

export const PUT = async (req: Request, params: { params: RouteParams }) => {
  const body = await req.json();
  const slug = params.params.slug;

  try {
    const updateData = await db
      .update(messages)
      .set({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      })
      .where(eq(messages.id, slug))
      .returning();

    return NextResponse.json(updateData, { status: 500 });
  } catch (error: any) {
    // console.log(error.message);
    return NextResponse.json(error.message, { status: 500 });
  }
};
