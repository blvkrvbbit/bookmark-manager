import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendResetEmail = async (email: string, resetLink: string) => {
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
