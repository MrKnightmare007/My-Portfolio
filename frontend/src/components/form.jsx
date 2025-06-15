import React from 'react';

const Form = () => {
  return (
    <div className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Email Me</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-neutral-700 text-black dark:text-white"
            placeholder="Your Name"
            disabled
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-neutral-700 text-black dark:text-white"
            placeholder="Your Email"
            disabled
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-neutral-700 text-black dark:text-white"
            rows="4"
            placeholder="Your Message"
            disabled
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Form;