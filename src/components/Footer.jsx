import React from 'react';

function Footer() {
  const linkStyle = {
    color: 'rgb(234, 179, 8)',
  };

  return (
    <div className="py-5 text-center">
      <p className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        Vite + React + Tailwind. This stack is a definite overkill but go big or
        go home right...? If you are interested, I can build similar styled
        website for you
        <a
          href="https://www.fiverr.com/s2/3001fc81b1"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          {' '}
          here
        </a>
        .
      </p>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Mateusz Korytkowski. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
