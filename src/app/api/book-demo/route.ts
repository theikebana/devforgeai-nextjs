import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      mobile,
      company,
      services = [],
      useCase,
      date,
      time,
      meetingLink,
    } = body;

    // Basic validation
    if (!name || !email || !mobile || !company || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!SENDGRID_API_KEY || !SENDGRID_FROM_EMAIL) {
      console.error("Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const servicesList =
      Array.isArray(services) && services.length
        ? services.join(", ")
        : "Not specified";

    sgMail.setApiKey(SENDGRID_API_KEY);

    // Send confirmation to the user who booked the demo
    await sgMail.send({
      to: email,
      from: SENDGRID_FROM_EMAIL,
      subject: "DevForge.ai – Demo request received",
      text: `Hi ${name},\n\nThanks for booking a demo with DevForge.ai. We've received your request for ${date} at ${time}.\n\nWe'll reach out shortly to confirm your slot and send a calendar invite.\n\n— DevForge.ai`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for booking a demo with DevForge.ai. We've received your request for <strong>${date}</strong> at <strong>${time}</strong>.</p>
        <p>We'll reach out shortly to confirm your slot and send a calendar invite.</p>
        <p>— DevForge.ai</p>
      `,
    });

    // Optional: notify internal team (same from-email or use a different env like SENDGRID_NOTIFY_EMAIL)
    await sgMail.send({
      to: SENDGRID_FROM_EMAIL,
      from: SENDGRID_FROM_EMAIL,
      subject: `[Book Demo] ${name} – ${company}`,
      text: `New demo request:\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company}\nServices: ${servicesList}\nUse case: ${useCase || "—"}\nDate: ${date}\nTime: ${time}\nMeeting link: ${meetingLink || "—"}`,
      html: `
        <p><strong>New demo request</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Mobile: ${mobile}</li>
          <li>Company: ${company}</li>
          <li>Services: ${servicesList}</li>
          <li>Use case: ${useCase || "—"}</li>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
          <li>Meeting link: ${meetingLink || "—"}</li>
        </ul>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error processing demo request", error);

    return NextResponse.json(
      { error: "Failed to process demo request" },
      { status: 500 }
    );
  }
}
