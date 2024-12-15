import "./contact.css";

import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append your Web3Forms access key
    formData.append("access_key", "20ebf075-8bea-4c33-861e-9bf68663452a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        event.target.reset(); // Clear the form after submission
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue sending your message. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error:", error);
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do get your messages, and if you send me a working email, I will reply
        right away. ☺️
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>twinklegenon7@gmail.com</h5>
            <a href="mailto:twinklegenon7@gmail.com">Send a message</a>
          </article>
        </div>
        <form action="" className="contact__form" onSubmit={onSubmit}>
          <div className="contact__form-group">
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div>
          <input
              type="text"
              placeholder="Enter a Subject"
              name="Subject"
              required
            />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
