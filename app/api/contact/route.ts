import { ContactTemplate } from '@/app/util/ContactTemplate';
import { NextRequest, NextResponse } from "next/server";

import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

resend.domains.create({ name: 'mail.theriderresidences.com' });

export async function POST(req:NextRequest){
    const body = await req.json();
 
    const { firstName, lastName, email, phone, subject, message, sender,rooms,broker  } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: "info@mail.theriderresidences.com",
      to: "octavio.alvarez@followupboss.me",
      subject: subject,
      react: ContactTemplate({ firstName: firstName, lastName:lastName, phone:phone, message:message, email:sender,rooms:rooms, broker:broker }),
    });

    if (error) {

      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}