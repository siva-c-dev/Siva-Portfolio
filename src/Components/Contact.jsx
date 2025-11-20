import React, { useRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_z7v4bqq",
      "template_1952bvl",
      form.current,
      "dVTE6RrzyXq0QnHxV"
    )
    .then(() => {
      toast.success("Form submited successfully");
      form.current.reset();
    })
    .catch((err) => {
      alert("Failed to send");
      console.error(err);
    });
  
  };
  return (
    <div className="container-fluid">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="contact p-5 text-center">
          <div className="details my-5">
            <h2 style={{ fontSize: "50px" }}>
              It's <span>Siva's</span> contact info
            </h2>{" "}
            <br />
            <h5 style={{ fontSize: "50px" }}>
              Feel free to reach out, I’m always open to new opportunities.
            </h5>{" "}
            <br />
            <p>Ideas become powerful when shared. Let’s talk.</p>
            <p>Get in Touch</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="address text-center">
          <div className="phone">
            <h4>
              <i className="bi bi-telephone-outbound"></i> Mobile No{" "}
            </h4>
            <h6>+91 9342329218</h6>
          </div>
          <div className="email">
            <h4>
              <i className="bi bi-envelope-open-heart"></i> Email ID{" "}
            </h4>
            <h6> sivagreenheart@gmail.com</h6>
          </div>
          <div className="findMe">
            <h4>
              <i className="bi bi-geo-alt"></i> Find Me
            </h4>
            <h6>103/A ,Middle street</h6>
            <h6>Thennavaneri -627108</h6>
            <h6>Tirunelveli Dist</h6>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="contactPage">
          <div className="pic">
            <img src="./Contact1.jpeg" alt="ContactPic" />
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="field">
                  <label>Enter Your Name :</label>
                  <input type="text" name="name" required />
                </div>

                <div className="field">
                  <label>Enter Your Phone No :</label>
                  <input type="number" name="phone" required />
                </div>
              </div>

              <label>Enter Your Email :</label>
              <input type="email" name="email" required />

              <label>Enter Your Message :</label>
              <textarea rows="5" name="message" required></textarea>

              <button type="submit">Submit</button>
              <Toaster position="top-center" />
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
