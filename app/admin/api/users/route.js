import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT id, student_name, prn_no, abc_id, university_name, college_name,
             education_level, programme_name, specialization, duration,
             grade_percentage, year_of_passing, remarks,
             verifying_agency_name, verifying_agency_email, verifying_agency_contact,
             verification_reason, marksheet_pdf, certificate_pdf, created_at
      FROM document_verification
      ORDER BY id DESC
    `);

    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error fetching users" }), { status: 500 });
  }
}
