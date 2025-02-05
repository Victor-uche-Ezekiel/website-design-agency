"use client";

import { Metadata } from "next";
import { motion, HTMLMotionProps } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters")
    .max(50, "Company must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Company can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),
  phone: z
    .string()
    .min(5, "Phone must be at least 5 characters")
    .max(20, "Phone must not exceed 20 characters"),
  budget: z
    .enum(["reset", "<2k", "2k-5k", "5k-10k", "10k-15k", "15k-20k", "20k+"])
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  content: string;
  link: string;
}

const fadeInUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      budget: undefined,
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  }

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "hello@vikiflow.com",
      link: "mailto:hello@vikiflow.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "123 Design Street, Creative City, DC 10001",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen relative pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02] bg-center" />
      <div className="relative">
        <PageHeader
          title="Let's Create Something Amazing Together"
          description="Have a project in mind? We'd love to hear about it. Get in touch with our team."
          className="pb-8"
          isHomePage={false}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Get in Touch Section */}
          <motion.div {...fadeInUp} className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you have a question about our services, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target={item.title === "Address" ? "_blank" : undefined}
                  rel={
                    item.title === "Address" ? "noopener noreferrer" : undefined
                  }
                  className={cn(
                    "group p-6 rounded-xl border bg-card text-card-foreground shadow-sm",
                    "hover:shadow-md hover:scale-105 transition-all duration-200"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-3 rounded-lg w-fit">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                    <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Contact us</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-medium mb-4">Let's work together</h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Your name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          Your company/organisation
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            type="email"
                            {...field}
                            className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                            disabled={isSubmitting}
                            autoComplete="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          Phone number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            type="tel"
                            {...field}
                            className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Please select a rough budget range
                      </FormLabel>
                      <div className="flex gap-2 w-full">
                        <Select
                          onValueChange={(value) => {
                            if (value === "reset") {
                              field.onChange(undefined);
                            } else {
                              field.onChange(value);
                            }
                          }}
                          value={field.value || ""}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-background border-muted-foreground/20 rounded-md px-4 py-3 h-auto">
                              <SelectValue placeholder="Select one..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem
                              value="reset"
                              className="text-muted-foreground italic"
                            >
                              Reset selection
                            </SelectItem>
                            <Separator className="my-2" />
                            <SelectItem value="<2k">Below $2,000</SelectItem>
                            <SelectItem value="2k-5k">
                              $2,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-15k">
                              $10,000 - $15,000
                            </SelectItem>
                            <SelectItem value="15k-20k">
                              $15,000 - $20,000
                            </SelectItem>
                            <SelectItem value="20k+">$20,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        How can we help?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message..."
                          className="min-h-[150px] bg-background border-muted-foreground/20 rounded-md px-4 py-3 resize-none"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" required />
                    <label
                      htmlFor="privacy"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      You agree to our friendly{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-md py-6 text-base font-normal"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="mr-2"
                        >
                          <Loader2 className="h-4 w-4" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* Our Clients Section */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Separator className="mb-16" />
            <h2 className="text-3xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed
              their digital presence with our innovative solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  className="w-32 h-12 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
