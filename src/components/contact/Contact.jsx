import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>ashaduzaman74@gmail.com</h5>
            <a href="mailto:ashaduzzaman2002@gmail.com" target="_blank">
              {" "}
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Massenger</h4>
            <h5>Ashadu Zaman</h5>
            <a href="mailto:ashaduzaman74@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9093482056</h5>
            <a
              href="https://api.whatsapp.com/phone+919093482056"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="Email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
