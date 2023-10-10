"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-center text-white px-4 lg:px-20 py-10 justify-between">
      <Link href="/" className="cursor-pointer flex items-center space-x-2">
        <Image src="/book.png" alt="" width={40} height={40} />

        <h2 className="text-2xl font-semibold ">PaperAdda</h2>
      </Link>
      <nav className=" hidden lg:flex items-center space-x-10">
        <Link href="/courses">
          <p className="hover:border-b border-indigo-600 cursor-pointer ">
            Courses
          </p>
        </Link>
        <Link href="/student-corner">
          <p className="hover:border-b border-indigo-600 cursor-pointer ">
            Student Corner
          </p>
        </Link>
        <Link href="/">
          <p className="hover:border-b border-indigo-600 cursor-pointer ">
            Current affairs
          </p>
        </Link>
        <Link href="/">
          <p className="hover:border-b border-indigo-600 cursor-pointer ">
            Daily Updates
          </p>
        </Link>
        <Link href="/">
          <p>Contact Us</p>
        </Link>
      </nav>
      <div className="hidden lg:flex  items-center space-x-10">
        <button
          onClick={() => router.push("/register")}
          className="px-12 py-4 rounded-md"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/login")}
          className="px-12 py-4 rounded-md bg-white text-black"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
