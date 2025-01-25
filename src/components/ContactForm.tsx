"use client";
import React, { useRef } from "react";

function ContactForm() {

  return (
    <form>
      <div className="flex max-md:flex-col flex-row gap-7 mb-[28px]">
        <input
          type="text"
          name="name"
          id="name"
          className="h-[50px] py-[8px] px-[16px] ring-1 border-none ring-fsecondary/70 focus:outline-none w-full focus:ring-fprimary text-xl text-secondary font-light focus:border-none"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          className="h-[50px] py-[8px] px-[16px] ring-1 border-none ring-fsecondary/70 focus:outline-none w-full focus:ring-fprimary text-xl text-fsecondary font-light focus:border-none"
          placeholder="Your Email"
          required
        />
      </div>
      <textarea
        name="message"
        id="message"
        className="w-full h-[110px] py-[8px] px-[16px] ring-1 border-none ring-fsecondary/70 focus:outline-none focus:ring-fprimary text-xl text-fsecondary font-light mb-[20px] focus:border-none"
        placeholder="Your Message"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-fprimary hover:bg-fsecondary text-fsecondary hover:text-white font-bold px-[24px] py-[8px] h-[48px]"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
