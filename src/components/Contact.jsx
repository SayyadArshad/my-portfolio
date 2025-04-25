import React from 'react';
const Contact = () => {
  return (
    <section
      name="contact"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            Contact
          </h2>
          <p className="py-6">Get in touch with me</p>
        </div>

        <div className="flex justify-center">
          <form
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-gray-100 dark:bg-gray-800 border-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-gray-100 dark:bg-gray-800 border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-gray-100 dark:bg-gray-800 border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="text-white bg-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:bg-blue-600 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;