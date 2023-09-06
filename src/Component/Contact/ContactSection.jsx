import React from "react";
import SectionTitle from "../About/SectionTitle";
import "./contact.css";
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";
const ContactSection = () => {
  return (
    <div className="contact section-container">
      <SectionTitle title="Contact Me" />
      <div className="contact-container">
        <div className="contact-gridBox">
          {ContactData.map((data, index) => {
            return (
              
              <div key={index}>
                <div className="contact-circle-overlay"></div>
                <div className="contact-icon">{data.icon}</div>
                <div className="contact-details">
                  <h3>{data.title}</h3>
                  <p><a
                   href={data.href}
                   target="_blank"
                   rel="noopener noreferrer"
                  >{data.text}</a></p>
                 
                </div>
              </div>
            );
          })}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
