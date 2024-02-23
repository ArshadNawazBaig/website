import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    const msg = {
      to: body.email,
      from: 'support@iveew.co',
      subject: 'match3win',
      text: 'test',
      html: `
      <div>
        User Name: ${body.name},
        <br />
        User Email: ${body.email}
        <br />
        User Business: ${body.business}
        <br />
        User Mobile Number: ${body.phone}
        <br />
        Message: ${body.message}
      </div>
      `,
    };
    sgMail.send(msg);
    return new NextResponse(JSON.stringify('ok', { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error }, { status: 500 })
    );
  }
};
