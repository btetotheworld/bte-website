"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"leaveMessage" | "subscribe">(
    "leaveMessage"
  );

  return (
    <section className="py-8 text-black" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-color-primary">
          Contact Us
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("leaveMessage")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "leaveMessage" ? "text-color-primary" : "text-white"
            }`}
          >
            Leave a Message
          </button>
          <button
            onClick={() => setActiveTab("subscribe")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "subscribe" ? "text-color-primary" : "text-white"
            }`}
          >
            Subscribe
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "leaveMessage" && (
            <motion.div
              key="leaveMessage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Leave a Message</h3>
              <form className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border text-black"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border rounded-lg  text-black"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border rounded-lg text-black"
                    placeholder="Type your message here"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          )}

          {activeTab === "subscribe" && (
            <motion.div
              key="subscribe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to Our Updates
              </h3>
              <p className="mb-8">
                Lorem ipsium doloremque penatibus et magnis dis parturient
                montes
              </p>
              <form className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="subscribeEmail" className="block text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="subscribeEmail"
                    name="subscribeEmail"
                    className="w-full p-3 border  rounded-lg text-black"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-blue text-white py-2 px-6 rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
