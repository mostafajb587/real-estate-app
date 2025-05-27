import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-200 flex items-center justify-center px-4">
        <div className="relative z-10 max-w-xl text-center p-10 rounded-2xl backdrop-blur-md bg-white/60 border border-white/30 shadow-lg">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
          >
            {error.status}
          </motion.h1>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mt-4"
          >
            {error.statusText || "Page Not Found"}
          </motion.h2>

          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
          >
            Back to Home
          </Link>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-12 left-0 right-0 mx-auto w-32 h-32 bg-green-100/50 blur-xl rounded-full"
          ></motion.div>
        </div>
      </div>
    );
  } else {
    // === Unknown Error (e.g. network error, undefined route error) ===
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl p-10 border border-gray-700 shadow-2xl max-w-xl w-full text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-4"
          ></motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Unexpected Error
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            An unexpected error has occurred. Please try again later or go back
            to the homepage.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }
};

export default ErrorPage;
