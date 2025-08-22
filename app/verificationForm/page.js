"use client";
import { useState } from "react";

export default function DocumentVerificationForm() {
  const [formData, setFormData] = useState({});
  const [marksheet, setMarksheet] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    if (marksheet) form.append("marksheet", marksheet);
    if (certificate) form.append("certificate", certificate);

    const res = await fetch("/admin/api/verificationSubmit", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          📄 Document Verification Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Input fields */}
          {[
            { name: "student_name", label: "Name of the Student" },
            { name: "prn_no", label: "PRN No" },
            { name: "abc_id", label: "ABC ID" },
            { name: "university_name", label: "University Name" },
            { name: "college_name", label: "Institute/College Name" },
            { name: "education_level", label: "Education Level (10th/12th/Diploma/UG/PG/Ph.D)" },
            { name: "programme_name", label: "Programme Name (Eg. B.Sc.)" },
            { name: "specialization", label: "Specialization" },
            { name: "duration", label: "Duration of Programme" },
            { name: "grade_percentage", label: "Grade/Percentage" },
            { name: "year_of_passing", label: "Year of Passing" },
            { name: "remarks", label: "Additional Remarks" },
            { name: "verifying_agency_name", label: "Name of Verifying Agency" },
            { name: "verifying_agency_email", label: "Email ID of Verifying Agency" },
            { name: "verifying_agency_contact", label: "Contact No of Verifying Agency" },
            { name: "verification_reason", label: "Reason for Document Verification" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required={field.name !== "remarks"}
              />
            </div>
          ))}

          {/* File Upload */}
          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Marksheet (PDF)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setMarksheet(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Certificate (PDF)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setCertificate(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Submit */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#93135C] text-white py-3 rounded-lg font-semibold hover:bg-[#de4a9e] transition"
            >
              🚀 Submit Verification
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-6 text-center text-green-600 font-medium text-lg">
            ✅ {message}
          </p>
        )}
      </div>
    </div>
  );
}
