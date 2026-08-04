import { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  return (
    <main>
      <section className="page-hero">
        <h1>Contact Us</h1>

        <p>
          Questions, partnerships or tournament inquiries? We'd love to hear
          from you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            <strong>Email:</strong> contact@thenecropolis.gg
          </p>

          <p>
            <strong>Phone:</strong> +961 70 123 456
          </p>

          <p>
            <strong>Location:</strong> Beirut, Lebanon
          </p>
        </div>

        <div className="contact-form">
          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              setMessageSent(true);
            }}
          >
            <input type="text" id="name" placeholder="Your Name" required />

            <input type="email" id="email" placeholder="Your Email" required />

            <textarea
              id="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      {messageSent && (
        <div className="contact-popup" onClick={() => setMessageSent(false)}>
          <div
            className="contact-popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>✔ Message Sent!</h2>

            <p>
              Thank you for contacting The Necropolis. We'll get back to you as
              soon as possible.
            </p>

            <button onClick={() => setMessageSent(false)}>Awesome!</button>
          </div>
        </div>
      )}
    </main>
  );
}
export default Contact;
