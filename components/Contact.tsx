import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
        formRef.current!,
        "3Kfp25amvpJXfbaFZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <form
      className="pt-3 w-full"
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
    >
      <label htmlFor="user_name">Name</label>
      <input
        className="w-full h-8 px-2 outline-none rounded-md transition-all duration-100 ease-in-out focus:border-2 focus:border-teal-500 bg-[#2b2b2b] mb-2"
        {...register("user_name", { required: true, minLength: 3 })}
        type="text"
        name="user_name"
      />
      {errors.user_name?.type === "required" && (
        <p className="text-sm text-brand-textSecondary" role="alert">
          Name is required
        </p>
      )}
      <label htmlFor="user_email">Email</label>
      <input
        className="w-full h-8 px-2 outline-none rounded-md transition-all duration-100 ease-in-out focus:border-2 focus:border-teal-500  bg-[#2b2b2b] mb-2"
        {...register("user_email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
        type="email"
        name="user_email"
      />
      {errors.user_email?.type === "required" && (
        <p className="text-sm text-brand-textSecondary" role="alert">
          Email is required
        </p>
      )}
      <label htmlFor="message">Message</label>
      <textarea
        className="w-full h-20 p-2 outline-none rounded-md transition-all duration-100 ease-in-out focus:border-2 focus:border-teal-500 bg-[#2b2b2b]"
        {...register("message", { required: true, minLength: 3 })}
        name="message"
      />
      {errors.message?.type === "required" && (
        <p className="text-sm text-brand-textSecondary mb-2" role="alert">
          Message is required
        </p>
      )}
      <button
        className="text-sm px-4 py-2 mt-1 text-white font-medium rounded-md border transition-all hover:text-white hover:bg-neutral-700 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1"
        type="submit"
        value="Send"
      >
        Send
      </button>
    </form>
  );
};
export default ContactForm;
