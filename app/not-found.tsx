export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex flex-col items-center justify-center text-center px-6">

      {/* 404 Number */}
      <h1 className="text-[120px] font-bold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent leading-none">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-4 max-w-md">
        The page you are looking for might have been removed,
        renamed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <a
        href="/"
        className="mt-8 px-8 py-3 rounded-full font-semibold text-white
        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
        hover:scale-105 active:scale-95 transition duration-300"
      >
        Go Back Home
      </a>

    </div>
  );
}
