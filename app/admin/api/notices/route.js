import pool from "@/lib/db";
import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const type = formData.get("type");
    const title = formData.get("title");
    const href = formData.get("href"); // external link (if any)
    const file = formData.get("file"); // File object (if any)

    let filePath = href || null; // default to external link

    // Handle file upload if provided
    if (file && typeof file.name === "string") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/pdf");
      await fs.mkdir(uploadDir, { recursive: true });

      filePath = `/pdf/${Date.now()}_${file.name}`;
      await fs.writeFile(path.join(uploadDir, `${Date.now()}_${file.name}`), buffer);
    }

    await pool.execute(
      "INSERT INTO notices (type, title, href) VALUES (?, ?, ?)",
      [type, title, filePath]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Upload error" }, { status: 500 });
  }
}
