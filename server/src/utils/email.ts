import { Resend } from "resend";

export const sendResetEmail = async (email: string, resetLink: string) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "Bookmark Manager <onboarding@resend.dev>",
    to: email,
    subject: "Reset your password",
    html: `
      <h2>Password Reset Request</h2>
      <p>You requested a password reset.</p>
      <a href="${resetLink}">Click here to reset your password</a>
      <p>This link expires in 15 minutes.</p>
    `,
  });
};
