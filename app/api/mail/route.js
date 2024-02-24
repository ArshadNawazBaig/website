import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(
//   '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'
// );

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: 'match3win',
      text: 'test',
      html: `
      <div>
        <b>User Name:</b> ${body.name} <br />
        <b>Business Name:</b> ${body.business} <br />
        <b>Phone:</b> ${body.phone} <br />
        <b>Email:</b> ${body.email} <br />
        <b>Message:</b> <br /> ${body.message}
      </div>
      `,
    };
    const mail = await sgMail.send(msg);
    return new NextResponse(JSON.stringify(mail, { status: 200 }));
  } catch (error) {
    return new NextResponse(error, { status: 401 });
  }
};
