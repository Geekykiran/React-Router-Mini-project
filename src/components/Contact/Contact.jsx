import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Get in Touch</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={(e)=> e.preventDefault}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="mt-8 text-center text-sm text-indigo-200">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
