"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "./ui/use-toast";

const contactFormSchema = z.object({
  user_name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  user_email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  message: z.string().min(5).max(500),
});

type contactFormType = z.infer<typeof contactFormSchema>;

const defaultValues = {
  user_name: "",
  user_email: "",
  message: "",
};

function ContactForm() {
  const { toast } = useToast();

  const form = useForm<contactFormType>({
    // TODO: review why this is throwing error for ZodObject
    // @ts-ignore
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit() {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
        formRef.current!,
        "3Kfp25amvpJXfbaFZ",
      )
      .then(
        () => {
          toast({
            title: "Thanks for contacting me!",
            description:
              "I really appreciate you taking the time to reach out. I will get back to you as soon as possible.",
          });
        },
        (error) => {
          throw new Error(error.text);
        },
      );
  }

  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Interested in collaborating with us? We'd love to hear from you!"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
export default ContactForm;
