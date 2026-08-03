import "../css/contact.css";

function Contact() {
    return (
        <main>
            <section className="page-hero">
      <h1>Contact Us</h1>

      <p>
        Questions, partnerships or tournament inquiries? We'd love to hear from
        you.
      </p>
    </section>

    <section className="contact-container">
      <div className="contact-info">
        <h2>Get In Touch</h2>

        <p><strong>Email:</strong> contact@thenecropolis.gg</p>

        <p><strong>Phone:</strong> +961 70 123 456</p>

        <p><strong>Location:</strong> Beirut, Lebanon</p>
      </div>

      <div className="contact-form">
        <form id="contactForm">
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
    </main>
    );
}
export default Contact;