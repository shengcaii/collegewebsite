"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <section className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We would love to hear from you! Please fill out the form below.
        </motion.p>

        {isSubmitted ? (
          <motion.p
            className="text-lg text-green-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Thank you for your message! We will get back to you shortly.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 mb-4 w-full max-w-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 mb-4 w-full max-w-md"
            />
            <textarea
              name="message"
              placeholder="Message or Feedback"
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-2 mb-4 w-full max-w-md h-32"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
