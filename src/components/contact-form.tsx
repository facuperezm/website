"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
      required_error: "A valid email is required.",
    })
    .email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(5, { message: "Message has to be more than 5 characters." })
    .max(400, { message: "Message has to be less than 500 characters." }),
});

type contactFormType = z.infer<typeof contactFormSchema>;

const defaultValues = {
  user_name: "",
  user_email: "",
  message: "",
};

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  const form = useForm<contactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit() {
    startTransition(async () => {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
          formRef.current!,
          "3Kfp25amvpJXfbaFZ",
        );

        setIsSubmitted(true);
        form.reset(defaultValues);

        toast({
          title: "Thanks for contacting me!",
          description: (
            <>
              <p className="text-pretty">
                I really appreciate you taking the time to reach out.
              </p>
              <p className="text-pretty">
                I will get back to you as soon as possible.
              </p>
            </>
          ),
        });
      } catch (error) {
        throw new Error((error as any).text);
      }
    });
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
                  <Input
                    className="transition duration-200"
                    placeholder="John Doe"
                    {...field}
                  />
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
                  <Input
                    className="transition duration-200"
                    placeholder="johndoe@email.com"
                    {...field}
                  />
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
                    placeholder="Hey Facundo! I would like to talk about..."
                    className="resize-none transition duration-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
            disabled={isPending || isSubmitted}
            type="submit"
          >
            {isPending && (
              <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />
            )}
            {isPending ? "Sending" : isSubmitted ? "Sent" : "Send"}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
export default ContactForm;
