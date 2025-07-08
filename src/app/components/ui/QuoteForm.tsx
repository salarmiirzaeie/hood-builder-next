"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." })
    .optional()
    .or(z.literal("")),
  email: z.string().email({ message: "Invalid email address." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  message: z.string().optional(),
  file: z.any().optional(),
  humanVerification: z.enum(["star", "flag", "bookmark"], {
    errorMap: () => ({ message: "Please select the correct icon." }),
  }),
});

type QuoteFormValues = z.infer<typeof formSchema>;

const QuoteForm: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      location: "",
      message: "",
      file: undefined,
    },
  });

  const onSubmit = (values: QuoteFormValues) => {
    console.log("Form submitted with values:", values);
  };

  const handleIconSelect = (icon: "star" | "flag" | "bookmark") => {
    setSelectedIcon(icon);
    form.setValue("humanVerification", icon, { shouldValidate: true });
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 sm:p-6 lg:p-8 font-['Inter']">
      <div className="w-full max-w-7xl bg-primary p-6 sm:p-8 lg:p-8 rounded-lg ">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8">Get a Free Quote</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Text Content */}
          <div className="text-white space-y-6">
            <p className="text-lg leading-relaxed">
              We&apos;ve got you covered. Hood Builder is a leading distribution, fabrication, and installation company
              for food facilities of any size. We have offices and plants across the United States that are ready to
              tend to your needs.
            </p>
            <p className="text-lg leading-relaxed">
              If you intend on receiving quotes from other installers in the industry, please be sure to compare the
              items included in the package in addition to price and reputation. Our objective is to always be your
              obvious choice. Please fill out the form below and we will prepare a quote.
            </p>
            <p className="text-lg leading-relaxed">
              For a Full and fast price Quote, Contact Hood Builder today at{" "}
              <span className="text-green-300">303-219-1883</span>.
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="bg-primary p-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage className="text-red-300">{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Phone Number"
                            {...field}
                            className="text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage className="text-red-300">{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email and Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                            className="text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage className="text-red-300">{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-white">Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Location"
                            {...field}
                            className="text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage className="text-red-300">{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message (Optional)"
                          {...field}
                          className="text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400 min-h-[120px]"
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage className="text-red-300">{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                {/* File Upload */}
                <FormItem>
                  <FormLabel className="text-white">Attach File (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="text-white file:text-blue-300 file:bg-blue-600 file:rounded-md file:px-3 file:py-1 file:mr-2 rounded-md focus:ring-blue-400 focus:border-blue-400"
                      onChange={(e) => form.setValue("file", e.target.files?.[0])}
                    />
                  </FormControl>
                </FormItem>

                {/* Human Verification */}
                <FormField
                  control={form.control}
                  name="humanVerification"
                  render={({ fieldState }) => (
                    <FormItem className="border border-blue-600 rounded-md p-4">
                      <FormLabel className="text-white mb-3 block">
                        Please prove you are human by selecting the flag
                      </FormLabel>
                      <FormControl>
                        <div className="flex space-x-4 justify-center">
                          {["star", "flag", "bookmark"].map((icon) => (
                            <div
                              key={icon}
                              className={`cursor-pointer p-3 rounded-full transition-colors duration-200 ${
                                selectedIcon === icon ? "bg-blue-600" : "hover:bg-blue-700"
                              }`}
                              onClick={() => handleIconSelect(icon as "star" | "flag" | "bookmark")}
                            >
                              {/* You could use real icons or keep SVGs as is */}
                              <span className="text-white capitalize">{icon}</span>
                            </div>
                          ))}
                        </div>
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage className="text-red-300 mt-2 text-center">{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-yellow-600 text-blue-900 rounded-md py-3 font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
                >
                  GET YOUR QUOTE
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
