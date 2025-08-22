// app/api/login/route.js
import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 });
    }

    const [rows] = await pool.query(
      "SELECT id, email, password FROM admin_users WHERE email = ? LIMIT 1",
      [email]
    );

    const user = rows && rows.length > 0 ? rows[0] : null;
    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }

    const res = NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
    // Simple cookie-based session (no server store). Improve with JWT/DB store if needed.
    res.cookies.set("admin_session", String(user.id), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}
