import * as dotenv from "dotenv";
import { NextResponse } from "next/server";

dotenv.config();

export async function POST(request: Request) {
  const data = await request.json();

  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.FROM_ADDR,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.FROM_ADDR,
    to: process.env.TO_ADDR,
    subject: "A new message from your portfolio",
    text: `${data.message} | Sent from: ${data.first} ${data.last} | Email: ${data.email} | Company ${data.company}`,
    html: `<p>From: ${data.first} ${data.last}</p><p>Email: ${data.email}</p><p>Company: ${data.company || 'none'}</p><p>${data.message}</p>`,
  });

  console.log("Message sent: %s", info.messageId);
  
  return new NextResponse('Message received')
}