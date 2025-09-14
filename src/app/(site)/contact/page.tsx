"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast"; // ✅ npm i react-hot-toast

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("⚠️ Please fill in all required fields.");
      return;
    }

    try {
      toast.loading("⏳ Sending message...");
      const res = await fetch("http://localhost:4000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      toast.dismiss(); // remove loading

      if (res.ok) {
        toast.success("🎉 Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("🚨 Error sending message.");
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          {/* Left side info */}
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-primary">
                Contact Us
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore e dolore magna aliqua.
              </p>

              <ContactInfo
                icon="📍"
                title="Our Location"
                details="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"
              />
              <ContactInfo
                icon="📞"
                title="Phone Number"
                details="(+62)81 414 257 9980"
              />
              <ContactInfo
                icon="📧"
                title="Email Address"
                details="info@yourdomain.com"
              />
            </div>
          </div>

          {/* Right side form */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
              <form onSubmit={handleSubmit}>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <ContactInputBox
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <ContactInputBox
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <ContactTextArea
                  rows={6}
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border bg-red-600 border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------
// Contact Info Component
// ----------------------
interface ContactInfoProps {
  icon: string;
  title: string;
  details: string;
}
const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => (
  <div className="mb-8 flex w-full max-w-[370px]">
    <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
      {icon}
    </div>
    <div>
      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
        {title}
      </h4>
      <p className="text-base text-body-color dark:text-dark-6">{details}</p>
    </div>
  </div>
);

// ----------------------
// Input Box Component
// ----------------------
interface ContactInputBoxProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ContactInputBox: React.FC<ContactInputBoxProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className="mb-6">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded border border-stroke bg-[#FCFDFE] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-2 focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
    />
  </div>
);

// ----------------------
// Text Area Component
// ----------------------
interface ContactTextAreaProps {
  rows: number;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const ContactTextArea: React.FC<ContactTextAreaProps> = ({
  rows,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className="mb-6">
    <textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded border border-stroke bg-[#FCFDFE] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-2 focus:ring-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
    />
  </div>
);

export default Contact;
