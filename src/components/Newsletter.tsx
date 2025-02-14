"use client";
import React, { useState } from "react";

const Newsletter = () => {
        const [email, setEmail] = useState("");
        const [state, setState] = useState("idle");
        const [errorMsg, setErrorMsg] = useState<{ title: string } | null>(
          null
        );

        const subscribe = async (e: any) => {
          e.preventDefault();
          setState("Loading");
          const res = await fetch(`/api/subscribe`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
          const data = await res.json();
          if (data.error) {
            setErrorMsg(data.error);
            setState("Error");
            return;
          }
          setState("Success");
          setEmail("");
        };
  return (
    <div className="bg-fprimary/85 pt-[56px] pb-[30px] max-sm:px-[16px]">
      <div className="myCont">
        <div className="max-w-[1000px] mx-auto max-md:flex-col flex justify-between gap-4">
          <h3 className="font-semibold text-[40px] leading-10">
            <span className="font-normal text-[36px]">Newsletter</span>
            <br /> Subscribe now
          </h3>
          <form
            action=""
            className="flex-1 flex-col flex border-box min-h-[100px]"
          >
            <section className="sm:flex grid">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="To get update, enter your email"
                className="flex-1 bg-transparent focus:outline-none border-solid border-[1px] focus:border-fsecondary focus:ring-0 sm:border-r-0 border-r-[1px] border-fsecondary p-[20px] text-xl font-medium placeholder:text-fsecondary md:ml-[48px]"
                required
              />
              <button
                id="newsletter"
                disabled={state === "Loading"}
                onClick={subscribe}
                type="submit"
                className="p-[20px] text-xl bg-transparent max-sm:border-t-0 hover:bg-fsecondary text-fsecondary hover:text-white font-bold border-[1px] border-solid border-fsecondary"
              >
                Subscribe
              </button>
            </section>
            <section className="text-center">
              {state === "Error" && errorMsg && (
                <div className="text-red-500 text-md">*{errorMsg.title}</div>
              )}
              {state === "Success" && (
                <div className="text-green-500 text-xs text-center">
                  Success. Thank You Subscribing our Newsletter
                </div>
              )}
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
