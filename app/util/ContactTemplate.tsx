
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
  <div>
    <h1 className="uppercase">New Inquiry from, {firstName} {lastName}:</h1>
    <p>Name: {firstName} {lastName}</p>
    <p>Email: {email}</p>
     <p>Phone: {phone}</p>
     <p>Rooms: {rooms}</p>
     <p style={{marginBottom:'20px'}}> Broker: {broker}</p>

    <p style={{marginBottom:'20px'}}> {message}</p>

  </div>
)}


