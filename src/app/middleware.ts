import { supabase } from "@/lib/supabse";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { data } = await supabase.auth.getUser();

  return NextResponse.redirect(new URL("/login", request.url));
}
