import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Crescent Studio <onboarding@resend.dev>",
      to: "mohamedabdikadirn@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #faf8f4;">
          <div style="background: #fff; border-radius: 10px; padding: 36px; border: 1px solid #e2d9c8;">
            <p style="font-size: 11px; font-family: monospace; letter-spacing: 0.12em; text-transform: uppercase; color: #c9a84c; margin: 0 0 12px;">Crescent Studio — New Inquiry</p>
            <h2 style="font-size: 22px; font-weight: 700; color: #0d1b2e; margin: 0 0 28px; font-family: Georgia, serif;">Message from ${name}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #718096; width: 110px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #0d1b2e; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #718096;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #ede8db;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #718096;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #0d1b2e;">${company}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #718096;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #ede8db; color: #0d1b2e;">${service}</td></tr>` : ""}
            </table>
            <div style="background: #faf8f4; border-left: 3px solid #c9a84c; padding: 16px 20px; border-radius: 4px;">
              <p style="font-size: 11px; color: #718096; margin: 0 0 8px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
              <p style="font-size: 15px; color: #0d1b2e; line-height: 1.75; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #a0aec0; margin: 20px 0 0;">Reply to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
