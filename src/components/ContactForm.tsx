"use client";
import React, { useState } from "react";

function ContactForm() {
       const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [message, setMessage] = useState("");
       const [submitting, setSubmitting] = useState(false);
       const [showSuccessMessage, setShowSuccessMessage] = useState(false);
       const [success, setSuccess] = useState(false);
       const [resMess, setResMess] = useState("");
       const formId = "32";
       const unitTag = "wpcf7-f395-p1-o1";
  const handleSubmit = async (event: any) => {
        event.preventDefault();
        setSubmitting(true);

          const formData = new FormData(event.target);
          formData.append("_wpcf7", formId);
          formData.append("_wpcf7_unit_tag", unitTag);

        const reqOptions = {
          method: "POST",
          body: formData,
        };
          try {
            const req = await fetch(
              `https://admin.finework.co.ke/wp-json/contact-form-7/v1/contact-forms/32/feedback`,
              reqOptions
            );

            if (!req.ok) {
              throw new Error(`HTTP error! status: ${req.status}`);
            }

            const response = await req.json();
            setResMess(response.message);

            if (response.status === "mail_sent") {
              setSuccess(true);
              setShowSuccessMessage(true);
              // Reset form
              setTimeout(() => {
                setShowSuccessMessage(false);
                setName("");
                setEmail("");
                setMessage("");
              }, 5000);
            } else {
              setSuccess(false);
              setResMess(
                response.message || "Failed to send message. Please try again."
              );
            }
          } catch (error) {
            console.error("Error submitting form:", error);
            setSuccess(false);
            setResMess(
              "An error occurred while sending your message. Please try again."
            );
          } finally {
            setSubmitting(false);
          }
      };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex max-md:flex-col flex-row gap-7 mb-[28px]">
        <input
          type="text"
          name="your-name"
          id="your-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-[50px] py-[8px] px-[16px] ring-1 border-none ring-fsecondary/70 focus:outline-none w-full focus:ring-fprimary text-xl text-secondary font-light focus:border-none"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="your-email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[50px] py-[8px] px-[16px] ring-1 border-none ring-fsecondary/70 focus:outline-none w-full focus:ring-fprimary text-xl text-fsecondary font-light focus:border-none"
          placeholder="Your Email"
          required
        />
      </div>
      <textarea
        id="your-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-[110px] py-[8px] px-[16px] ring-1 border-none ring-fsecondary/70 focus:outline-none focus:ring-fprimary text-xl text-fsecondary font-light mb-[20px] focus:border-none"
        placeholder="Your Message"
        required
      ></textarea>
      <input
        type="submit"
        value={submitting ? "Sending Message" : "SEND MESSAGE"}
        disabled={submitting}
        className="bg-fprimary hover:bg-fsecondary text-fsecondary hover:text-white font-bold px-[24px] py-[8px] h-[48px] capitalize cursor-pointer"
      />

      {showSuccessMessage && (
        <div
          className={`lg:col-span-2 text-center ${
            success ? "text-green-600" : "text-red-600"
          }`}
        >
          {resMess}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
