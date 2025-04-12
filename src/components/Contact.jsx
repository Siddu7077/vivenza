import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-6">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether it’s a booking inquiry or just a quick question about Vivenza, feel free to drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Booking inquiry, Feedback, etc."
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-700">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-700">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">info@vivenza.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-700">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium text-gray-800">Vivenza Farmhouse, Green Valley Road, Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span> <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span> <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span> <span>Closed</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-green-700 hover:bg-green-100 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-green-700 hover:bg-green-100 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-green-700 hover:bg-green-100 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
