import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      toast.success("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      toast.error("Failed to send message ❌");
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact-section">

      <Toaster position="top-right" />

      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Build Something Amazing 🚀
        </motion.h2>

        <div className="contact-wrapper">

          {/* FORM */}
          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
            />

            <button disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

          {/* INFO */}
          <motion.div
            className="contact-info glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3>Get in Touch</h3>

            <p>
              I’m open for freelance work and collaborations. Let’s create something powerful.
            </p>

            <div className="info-box">
              <span>Email</span>
              <p>mosaudi2001@gmail.com</p>
            </div>

            <div className="info-box">
              <span>Location</span>
              <p>Egypt 🇪🇬</p>
            </div>

            <div className="social">

              <a href="https://github.com/mosaudi2001" target="_blank" rel="noreferrer">GitHub</a>

              <a href="https://www.linkedin.com/in/محمد-عبدالله-957715404" target="_blank" rel="noreferrer">LinkedIn</a>

              <a href="https://www.facebook.com/share/1BkoHaqKCt" target="_blank" rel="noreferrer">Facebook</a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}