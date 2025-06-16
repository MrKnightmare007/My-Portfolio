import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, subject, email, message } = formData;

    // Validate that all fields are filled (trim to remove whitespace)
    if (!name.trim() || !subject.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Construct mailto link
    const mailtoLink = `mailto:dassoumyadipta007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

    // Trigger the mailto link
    window.location.href = mailtoLink;

    // Clear the form after submission
    setFormData({
      name: '',
      subject: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="glass-container p-6">
      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Email Me</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-neutral-700 text-black dark:text-white"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 p-2 w-full border rounded-md bg-white dark:bg-neutral-700 text-black dark:text-white"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;