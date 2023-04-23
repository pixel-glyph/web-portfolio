import * as dotenv from "dotenv";
import { NextResponse } from "next/server";

dotenv.config();

export async function POST(request: Request) {
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
    subject: "Web Development!",
    text: "The Quick Brown Fox",
    html: "<p>The Quick Brown Fox</p>",
  });

  console.log("Message sent: %s", info.messageId);
  
  return new NextResponse('Message received')
}