"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(2, "Name is required."),
  email:   z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about your project."),
});

type FormData = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "var(--cream-mid)",
  border: "1px solid var(--border)",
  borderRadius: "6px",
  padding: "12px 16px",
  fontSize: "15px",
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--navy-text)",
  marginBottom: "8px",
  fontFamily: "var(--font-body)",
  letterSpacing: "0.02em",
};

const services = [
  "Web Design & Development",
  "Graphic Design",
  "SEO",
  "Digital Marketing",
  "Website Maintenance",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "26px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "32px" }}>
        Tell Us About Your Project
      </h2>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Your Name <span style={{ color: "#e53e3e" }}>*</span></label>
            <input {...register("name")} type="text" placeholder="Jane Smith" autoComplete="name" style={inputStyle} />
            {errors.name && <p style={{ color: "#e53e3e", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-body)" }}>{errors.name.message}</p>}
          </div>
          <div>
            <label style={labelStyle}>Email Address <span style={{ color: "#e53e3e" }}>*</span></label>
            <input {...register("email")} type="email" placeholder="jane@company.com" autoComplete="email" style={inputStyle} />
            {errors.email && <p style={{ color: "#e53e3e", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-body)" }}>{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label style={labelStyle}>Company / Business Name <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
          <input {...register("company")} type="text" placeholder="Acme Co." style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Service You&apos;re Interested In <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
          <select {...register("service")} style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="">Select a service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Tell Us About Your Project <span style={{ color: "#e53e3e" }}>*</span></label>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="What are you looking to build or improve?"
            style={{ ...inputStyle, resize: "none" }}
          />
          {errors.message && <p style={{ color: "#e53e3e", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-body)" }}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          style={{
            width: "100%",
            backgroundColor: status === "loading" || status === "success" ? "var(--text-light)" : "var(--navy)",
            color: "#fff", padding: "16px",
            borderRadius: "6px",
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "15px",
            border: "none", cursor: status === "loading" || status === "success" ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <div style={{ backgroundColor: "var(--gold-light)", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: "var(--navy-text)", marginBottom: "6px" }}>Message received!</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)" }}>We&apos;ll get back to you within one business day.</p>
          </div>
        )}
        {status === "error" && (
          <p style={{ color: "#e53e3e", fontSize: "14px", textAlign: "center", fontFamily: "var(--font-body)" }}>
            Something went wrong. Please email us at mohamed@crescentstudio.co
          </p>
        )}
      </div>
    </form>
  );
}
