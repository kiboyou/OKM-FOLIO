import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const MAIL_USERNAME_RECEPTION = process.env.MAIL_USERNAME_RECEPTION;

export const isEmailConfigured = Boolean(
  EMAIL_USER && EMAIL_PASSWORD && MAIL_USERNAME_RECEPTION
);

// Sends the contact message by email via Gmail SMTP — mirrors the original
// FastAPI send_email(). No-op when email is not configured.
export async function sendContactEmail(params: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!isEmailConfigured) return;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD },
  });
  await transporter.sendMail({
    from: EMAIL_USER,
    to: MAIL_USERNAME_RECEPTION,
    replyTo: params.email,
    subject: params.subject,
    text: `Nom: ${params.name}\nEmail: ${params.email}\nMessage: ${params.message}`,
  });
}

// Notifies the owner of a new idea proposal.
export async function sendIdeaProposalEmail(params: {
  author_name: string;
  author_email: string;
  title: string;
  message: string;
}) {
  if (!isEmailConfigured) return;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD },
  });
  await transporter.sendMail({
    from: EMAIL_USER,
    to: MAIL_USERNAME_RECEPTION,
    replyTo: params.author_email,
    subject: `Nouvelle idée : ${params.title}`,
    text: `De: ${params.author_name} (${params.author_email})\n\n${params.message}`,
  });
}
