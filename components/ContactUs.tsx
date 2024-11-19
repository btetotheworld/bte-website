"use client";
import React, { useState } from "react";
import './contact.css';

// Define types for form data and errors
interface FormData {
  email: string;
  message: string;
}

interface FormErrors {
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    message: "",
  });

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        if (!value.trim()) {
          return "Email is required.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Enter a valid email address.";
        }
        return "";
      case "message":
        if (!value.trim()) {
          return "Message cannot be empty.";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation for the specific field
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      // Add API call here
    }
  };

  const handleReset = () => {
    setFormData({
      email: "",
      message: "",
    });
    setErrors({
      email: "",
      message: "",
    });
  };

  return (
    <section className="h-screen bg-white p-8">
      <div className="  flex h-[100%] flex-col md:flex-row">
        {/* Contact Info Section */}
        <div
          className="contact text-white p-6 w-full md:w-[40%] flex-shrink-0 bg-cover bg-center"
        >
         
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[60%] p-6 bg-white rounded-lg shadow-md"
        >

          <h2 className="text-2xl text-color-primary  font-bold mb-4">Contact Us</h2>
          <p className="mb-4 text-black">
            For any inquiries or assistance, reach out to us. We’re here to help!
          </p>
          <div className="grid grid-cols-1 gap-4">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black text-start">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johnDoe@gmail.com"
                required
                className={`outline-none border-b-2 p-2 rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-black text-start">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                required
                className={`outline-none border-b-2 p-2 rounded-md h-24 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
