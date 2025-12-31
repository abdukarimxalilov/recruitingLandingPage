import { company } from "@/data/site";
import { contactSchema, type ContactFormInput } from "@/lib/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const emailTo = process.env.EMAIL_TO ?? company.email;
const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }

    const data = parsed.data;
    const summary = createEmailSummary(data);

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      try {
        await resend.emails.send({
          from: "Tim Miller Recruiting <notifications@timmillerrecruiting.com>",
          to: [emailTo],
          subject: `New contact form lead: ${data.name}`,
          replyTo: data.email,
          text: summary,
        });
      } catch (error) {
        console.error("Resend error", error);
        return NextResponse.json(
          { error: "Unable to deliver email via Resend." },
          { status: 502 },
        );
      }
    } else if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return NextResponse.json(
          { error: "Form endpoint rejected the submission." },
          { status: 502 },
        );
      }
    } else {
      console.warn("No email integration configured.");
      return NextResponse.json(
        {
          error:
            "Email integration is not configured. Provide RESEND_API_KEY or FORMSPREE_ENDPOINT.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Unexpected error processing request." },
      { status: 500 },
    );
  }
}

function createEmailSummary(data: ContactFormInput) {
  const details = [
    `Name: ${data.name}`,
    data.company ? `Company: ${data.company}` : null,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Intent: ${intentLabel(data.intent)}`,
    data.message ? `Message: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `${details}\n\nSent from Tim Miller Recruiting landing page.`;
}

function intentLabel(intent: string) {
  switch (intent) {
    case "talent":
      return "I need talent";
    case "job":
      return "I am a job seeker";
    case "partnership":
      return "Partnership inquiry";
    default:
      return intent;
  }
}
