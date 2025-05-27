import { useState } from "react";
import { Home, Menu, X, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const links = ["home", "about", "services", "blog", "pricing", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <Home className="w-6 h-6" />
            <span className="text-slate-800">
              Rent<span className="text-green-500">UP</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link}
                to={`/${link == "home" ? "" : link}`}
                className="text-slate-800 hover:text-green-500 transition font-medium"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex">
            <Link to={"/signin"}>
              <button className="gap-2 hover:text-green-500">
                <LogIn className="w-5 h-5  " />
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-800"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              onClick={() => setMenuOpen(!menuOpen)}
              key={link}
              to={`/${link == "home" ? "" : link}`}
              className="block text-slate-800 hover:text-green-500 font-medium"
            >
              {link}
            </Link>
          ))}
          <Link to={"/signin"}>
            <button className="mt-2 w-full gap-2 flex hover:text-green-500">
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
