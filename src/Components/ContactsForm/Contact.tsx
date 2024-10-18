import React, { useState } from 'react';
import Contact from '../../Models/Contact';
import ContactModel from '../../Models/Contact'; // אם יש ייבוא נוסף שדרוש עבור המודל
import './Contact.scss';


const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<ContactModel>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', contact);
    // כאן תוכל להוסיף פונקציה לשלוח את הנתונים לשרת או לכל מערכת אחרת
  };

  const contactOptions: Contact[] = [
    new Contact("Phone", "(+972)54-566-9236", "tel:0545669236", "phone-book.png"),
    new Contact("Email", "yitzhakveliran18@gmail.com", "mailto:yitzhakveliran18@gmail.com", "mail.png"),
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h2>צרו קשר</h2>
      <input
        type="text"
        name="name"
        minLength={2}
        maxLength={15}
        placeholder="שם מלא"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        minLength={2}
        maxLength={30}
        placeholder="מייל"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        minLength={9}
        maxLength={15}
        placeholder="טלפון"
        value={contact.phone}
        onChange={handleChange}
        required
      />
      {/* <button type="submit" disabled={.submitting}>
                Send
            </button> */}
    </form>
  );
};

export default ContactForm;
