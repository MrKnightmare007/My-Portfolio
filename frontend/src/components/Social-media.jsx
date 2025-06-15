import React from 'react';

const SocialMedia = () => {
  return (
    <div className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Connect with Me</h3>
      <ul className="space-y-3">
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;