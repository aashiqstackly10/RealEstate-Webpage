
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  House,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Agents", path: "/agents" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-[#f47736]"
        : "text-gray-600 hover:text-[#f47736]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f47736] text-white">
            <House size={23} strokeWidth={2.2} />
          </span>

          <span className="text-xl font-bold tracking-tight text-[#181818]">
            Estate<span className="text-[#f47736]">ly.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-[#181818] transition hover:text-[#f47736]"
          >
            Log in
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#f47736] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e76627]"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-[#181818] transition hover:border-[#f47736] hover:text-[#f47736] md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#fff0e7] text-[#f47736]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#f47736]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-[#181818] transition hover:border-[#f47736]"
            >
              Log in
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#f47736] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e76627]"
            >
              Contact
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}