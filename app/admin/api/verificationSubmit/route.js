import pool from "@/lib/db";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // File handling
    const uploadDir = path.join(process.cwd(), "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const saveFile = async (file, name) => {
      if (!file) return null;
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, filename);
      await fs.writeFile(filePath, buffer);
      // Store only the filename in DB; files will be served via /api/files/[filename]
      return filename;
    };

    const marksheetPath = await saveFile(formData.get("marksheet"), "marksheet");
    const certificatePath = await saveFile(formData.get("certificate"), "certificate");

   const fields = [
  "student_name","prn_no","abc_id","university_name","college_name",
  "education_level","programme_name","specialization","duration",
  "grade_percentage","year_of_passing","remarks",
  "verifying_agency_name","verifying_agency_email","verifying_agency_contact",
  "verification_reason"
];

const values = fields.map((f) => formData.get(f));

const [result] = await pool.query(
  `INSERT INTO document_verification (${fields.join(",")}, marksheet_pdf, certificate_pdf) VALUES (${fields.map(() => "?").join(",")}, ?, ?)`,
  [...values, marksheetPath, certificatePath]
);


    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error submitting form" }), { status: 500 });
  }
}
