import { promises as fs } from "fs";
import path from "path";

export async function GET(req, { params }) {
  try {
    const { filename } = params;
    if (!filename) {
      return new Response(JSON.stringify({ message: "Filename is required" }), { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "uploads");
    const filePath = path.join(uploadsDir, filename);

    // Ensure the resolved path stays within the uploads directory
    const normalizedUploads = path.normalize(uploadsDir + path.sep);
    const normalizedFile = path.normalize(filePath);
    if (!normalizedFile.startsWith(normalizedUploads)) {
      return new Response(JSON.stringify({ message: "Invalid path" }), { status: 400 });
    }

    const data = await fs.readFile(normalizedFile);

    // Default to PDF since current use-case is PDF documents
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "File not found" }), { status: 404 });
  }
}


