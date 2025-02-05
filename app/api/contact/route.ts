import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      phone: data.phone,
      budget: data.budget,
      message: data.message,
    };

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.EMAILJS_PUBLIC_KEY
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
