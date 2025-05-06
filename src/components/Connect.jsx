import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PageWrapper from "./PageWrapper";
const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm("service_fxbieev", "template_99e88lz", e.target, "Xvm_sN1ZC_F2RblIq")
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Thank you for reaching out! I will get back to you soon.");
        e.target.reset(); // Clear the form after successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <PageWrapper>
    <section className="flex flex-col items-center justify-center min-h-screen px-6">
      <h2 
         className="text-4xl font-bold text-gray-900 mb-6 transition-all duration-500 hover:text-blue-600">Connect With Me</h2>
      
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md sm:max-w-lg bg-white p-6 rounded-2xl shadow-lg"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="transition duration-300 ease-in-out transform focus:scale-103 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="transition duration-300 ease-in-out transform focus:scale-103 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className= "transition duration-300 ease-in-out transform focus:scale-103 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
         className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
    </PageWrapper>
  );
};

export default Connect;
