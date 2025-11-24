
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName:string;
  phone:string;
  rooms:string;
  broker:string;
  message: string;
  email: string
}


export function ContactTemplate ({
  firstName, lastName, phone, rooms, broker, message, email
}:EmailTemplateProps) {
  return(
  <p>
    First Name: {firstName}<br/>
    Last Name: {lastName}<br/>
    Email: {email}<br/>
    Comments: {message}<br/>
    Phone: {phone}<br/>
    Is Broker: {broker}<br/>
    Unit Interest: {rooms}<br/>

  </p>
)}


