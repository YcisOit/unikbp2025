import pool from "@/lib/db"; // adjust path to your db connection

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
      });
    }

    await pool.query("DELETE FROM notices WHERE id = ?", [id]);

    return new Response(
      JSON.stringify({ message: "Notice deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete notice" }), {
      status: 500,
    });
  }
}
