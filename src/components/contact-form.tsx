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
  website: z.string().refine((val) => val === "", {
    message: "Error submitting form",
  }),
});

type contactFormType = z.infer<typeof contactFormSchema>;

const defaultValues: contactFormType = {
  user_name: "",
  user_email: "",
  message: "",
  website: "",
};

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  const form = useForm<contactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onTouched",
  });

  const checkRateLimit = () => {
    const submissions = JSON.parse(
      localStorage.getItem("form_submissions") || "[]",
    ) as number[];
    const now = Date.now();
    const twoHoursAgo = now - 60 * 60 * 1000 * 2; // 2 hours ago

    const recentSubmissions = submissions.filter(
      (timestamp) => timestamp > twoHoursAgo,
    );

    if (recentSubmissions.length >= 2) {
      const nextSubmissionTime = new Date(
        recentSubmissions[0] + 60 * 60 * 1000 * 2,
      );
      throw new Error(
        `You've tried to submit the form too many times. Please try again after ${nextSubmissionTime.toLocaleTimeString()}`,
      );
    }

    recentSubmissions.push(now);
    localStorage.setItem("form_submissions", JSON.stringify(recentSubmissions));
  };

  const onSubmit = async (data: contactFormType) => {
    startTransition(async () => {
      try {
        if (data.website !== "") {
          console.debug("Honeypot triggered");
          return;
        }

        const formStartTime = (window as any).__formStartTime;
        const submissionTime = Date.now();
        const timeDiff = submissionTime - formStartTime;

        if (timeDiff < 3000) {
          console.debug("Bot detection: Form filled too quickly");
          return;
        }

        checkRateLimit();

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
        if ((error as Error).message.includes("Error submitting form")) {
          return;
        }

        toast({
          variant: "destructive",
          title: "Sorry, something went wrong",
          description: (error as Error).message,
        });
      }
    });
  };

  React.useEffect(() => {
    (window as any).__formStartTime = Date.now();
  }, []);

  return (
    <>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
          autoComplete="off"
        >
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full text-base transition duration-200"
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
                <FormItem className="w-full">
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base transition duration-200"
                      placeholder="johndoe@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hey Facundo! I would like to talk about..."
                    rows={4}
                    className="resize-none text-base transition duration-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 0,
                  width: 0,
                  zIndex: -1,
                  overflow: "hidden",
                }}
              >
                <FormControl>
                  <Input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    {...field}
                  />
                </FormControl>
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
