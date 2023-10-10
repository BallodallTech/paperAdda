"use client";

import { supabase } from "@/lib/supabse";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    router.push("/user/dashboard");

    if (error) {
      toast.error("Authentication Failed ");
    }

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-8 w-[90%] lg:w-[80%] mx-auto flex-col items-center space-y-6"
    >
      <div className="w-full mx-auto">
        <label htmlFor="username" className="text-sm  text-gray-500">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          className="w-full rounded-lg focus:ring-2 ring-zinc-700 focus:border-zinc-700 ring-offset-2 px-6 mt-2 py-2 border focus:outline-none border-gray-200"
        />
      </div>

      <div className="w-full mx-auto">
        <label htmlFor="email" className="text-sm  text-gray-500">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="w-full rounded-lg focus:ring-2 ring-zinc-700 focus:border-zinc-700 ring-offset-2 px-6 mt-2 py-2 border focus:outline-none border-gray-200"
        />
      </div>
      <div className="w-full mx-auto">
        <label htmlFor="password" className="text-sm  text-gray-500">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg focus:ring-2 ring-zinc-700 focus:border-zinc-700 ring-offset-2 px-6 mt-2 py-2 border focus:outline-none border-gray-200"
        />
      </div>
      <input
        type="submit"
        className=" w-full mx-auto cursor-pointer text-white text-sm font-semibold shadow-md shadow-indigo-600 rounded-lg py-3 bg-gradient-to-r from-pink-500 to-indigo-500"
        value={"Submit"}
      />

      <div className="flex items-center justify-between">
        <Link href="/auth/login">
          <p className="text-xs">
            have an account?
            <span className="text-sm font-semibold text-indigo-600 cursor-pointer hover:underline underline-offset-2">
              Login Now
            </span>
          </p>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
