"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Shadcn UI components (assuming these are available or imported from your shadcn/ui setup)
// For this example, I'm providing basic implementations or placeholders for them.
// In a real Next.js/Shadcn project, you would import them like:
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Define types for placeholder components

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
  file: z.any().optional(), // File validation can be more complex, e.g., size/type
  humanVerification: z.enum(["star", "flag", "bookmark"], {
    errorMap: () => ({ message: "Please select the correct icon." }),
  }),
});

// Infer the type from the Zod schema
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
    // Here you would typically send the data to your backend
  };

  // Function to handle icon selection for human verification
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
              We've got you covered. Hood Builder is a leading distribution, fabrication, and installation company for
              food facilities of any size. We have offices and plants across the United States that are ready to tend to
              your needs.
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
                            className=" text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
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
                            className=" text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
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
                            className=" text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
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
                            className=" text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400"
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
                          className=" text-white placeholder-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400 min-h-[120px]"
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage className="text-red-300">{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                {/* File Upload (basic input, styling might need custom Shadcn component) */}
                <FormItem>
                  <FormLabel className="text-white">Attach File (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className=" text-white file:text-blue-300 file:bg-blue-600 file:rounded-md file:px-3 file:py-1 file:mr-2 rounded-md focus:ring-blue-400 focus:border-blue-400"
                      onChange={(e) => form.setValue("file", e.target.files?.[0])}
                    />
                  </FormControl>
                </FormItem>

                {/* Human Verification */}
                <FormField
                  control={form.control}
                  name="humanVerification"
                  render={({ field, fieldState }) => (
                    <FormItem className="border border-blue-600 rounded-md p-4">
                      <FormLabel className="text-white mb-3 block">
                        Please prove you are human by selecting the flag
                      </FormLabel>
                      <FormControl>
                        <div className="flex space-x-4 justify-center">
                          {/* Star Icon */}
                          <div
                            className={`cursor-pointer p-3 rounded-full transition-colors duration-200 ${
                              selectedIcon === "star" ? "bg-blue-600" : "hover:bg-blue-700"
                            }`}
                            onClick={() => handleIconSelect("star")}
                          >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          {/* Flag Icon */}
                          <div
                            className={`cursor-pointer p-3 rounded-full transition-colors duration-200 ${
                              selectedIcon === "flag" ? "bg-blue-600" : "hover:bg-blue-700"
                            }`}
                            onClick={() => handleIconSelect("flag")}
                          >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 5h1v2h-1V5zM10 7V5h1v2h-1zM9 5h1v2H9V5zM8 7V5h1v2H8zM7 5h1v2H7V5zM6 7V5h1v2H6zM5 5h1v2H5V5zM4 7V5h1v2H4zM3 5h1v2H3V5zM2 7V5h1v2H2zM1 5h1v2H1V5zM0 7V5h1v2H0zM11 9h1v2h-1V9zM10 11V9h1v2h-1zM9 9h1v2H9V9zM8 11V9h1v2H8zM7 9h1v2H7V9zM6 11V9h1v2H6zM5 9h1v2H5V9zM4 11V9h1v2H4zM3 9h1v2H3V9zM2 11V9h1v2H2zM1 9h1v2H1V9zM0 11V9h1v2H0zM11 13h1v2h-1v-2zM10 15v-2h1v2h-1zM9 13h1v2H9v-2zM8 15v-2h1v2H8zM7 13h1v2H7v-2zM6 15v-2h1v2H6zM5 13h1v2H5v-2zM4 15v-2h1v2H4zM3 13h1v2H3v-2zM2 15v-2h1v2H2zM1 13h1v2H1v-2zM0 15v-2h1v2H0z" />
                            </svg>
                          </div>
                          {/* Bookmark Icon */}
                          <div
                            className={`cursor-pointer p-3 rounded-full transition-colors duration-200 ${
                              selectedIcon === "bookmark" ? "bg-blue-600" : "hover:bg-blue-700"
                            }`}
                            onClick={() => handleIconSelect("bookmark")}
                          >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM7 9a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2h-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
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
