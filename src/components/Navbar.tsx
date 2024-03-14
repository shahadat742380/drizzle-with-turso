"use client";
// import core package
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="bg-gray-800 w-full">
      <div className="container mx-auto h-20 p-5 flex justify-between">
        <div>
          <h1 className="text-white ">Drizzle<span className="text-green-500">/Turso</span></h1>
        </div>
        <div>
          {!!user ? (
            <div className="flex gap-4">
              <UserButton />
            </div>
          ) : (
            <Link href="/sign-in">
              <button className="py-2 px-3 bg-green-600 rounded-md text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
