import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-10 border border-white/40">
        {/* Tabs */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`w-1/2 py-2 font-semibold rounded-l-full transition ${
              isSignIn
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`w-1/2 py-2 font-semibold rounded-r-full transition ${
              !isSignIn
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Animated Form Container */}
        <AnimatePresence mode="wait">
          {isSignIn ? (
            <motion.form
              key="signIn"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-lg font-semibold"
              >
                Sign In
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="signUp"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Create password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-lg font-semibold"
              >
                Sign Up
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
