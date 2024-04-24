import db from "@/db";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";

// ** post single user
export async function POST(req: Request) {
  console.log("working");
  const body = await req.json();
  console.log(body);
  const newUser = await db
    .insert(users)
    .values({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
    })
    .returning()
    .get();
  console.log({ newUser });

  return NextResponse.json(newUser, { status: 200 });
}


// ** Get all user
export async function GET(req: Request) {
  const usersData = await db.query.users.findMany();
  return NextResponse.json(usersData, { status: 200 });
}
