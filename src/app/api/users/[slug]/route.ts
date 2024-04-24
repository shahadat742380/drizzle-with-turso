// import db
import db from "@/db";
import { users } from "@/db/schema";

// import schema

// import core packages
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// Define the structure for your route parameters
interface RouteParams {
  slug: number;
}


// ** Delete single user
export const DELETE = async (req: Request, params: { params: RouteParams }) => {
  const slug = params.params.slug;
//   console.log(slug, typeof slug);

  try {
    const deleteUser = await db
      .delete(users)
      .where(eq(users.id, slug))
      .returning();
    // console.log(deleteMessage);
    return NextResponse.json(deleteUser, { status: 200 });
  } catch (error: any) {
    // console.log(error.message);
    return NextResponse.json(error.message, { status: 500 });
  }
};


// update single user
export const PUT = async (req: Request, params: { params: RouteParams }) => {
  const body = await req.json();
  const slug = params.params.slug;

  try {
    const updateUser = await db
      .update(users)
      .set({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
      })
      .where(eq(users.id, slug))
      .returning();

    return NextResponse.json(updateUser, { status: 500 });
  } catch (error: any) {
    // console.log(error.message);
    return NextResponse.json(error.message, { status: 500 });
  }
};
