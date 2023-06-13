function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        Vite + React + Tailwind. This stack is a definite overkill but go big or
        go home right...?
      </p>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Mateusz Korytkowski. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
