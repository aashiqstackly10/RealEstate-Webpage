
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  House,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please complete all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Your password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    signup(name.trim(), email.trim(), password);
    navigate("/");
  };

  const inputClass =
    "w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#aaa]";

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">

        {/* Left panel */}
        <div className="relative hidden min-h-[680px] flex-col justify-between overflow-hidden bg-[#181818] p-10 text-white md:flex lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#343434] via-[#181818] to-[#f47736]/40" />

          <Link to="/" className="relative flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f47736] font-bold">
              R
            </span>
            <span className="text-xl font-bold tracking-wide">REALTY</span>
          </Link>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb58d]">
              Your journey begins
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
              Make room
              <br />
              for <span className="italic text-[#ff9b68]">what's next.</span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Create your account and start exploring homes, discover
              new possibilities, and find your perfect place.
            </p>
          </div>

          <p className="relative text-xs text-white/50">
            A better way to find your home.
          </p>
        </div>

        {/* Signup form */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10 md:py-12 lg:px-14">
          <div className="w-full max-w-md">

            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#181818] md:hidden"
            >
              <House size={19} className="text-[#f47736]" />
              REALTY
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f47736]">
              Get started
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
              Create your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#777]">
              Fill in your details to join our community.
            </p>

            {error && (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label htmlFor="signup-name" className="mb-2 block text-sm font-semibold">
                  Full name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] px-4 focus-within:border-[#f47736]">
                  <UserRound size={18} className="shrink-0 text-[#999]" />
                  <input
                    id="signup-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="mb-2 block text-sm font-semibold">
                  Email address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] px-4 focus-within:border-[#f47736]">
                  <Mail size={18} className="shrink-0 text-[#999]" />
                  <input
                    id="signup-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-password" className="mb-2 block text-sm font-semibold">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] px-4 focus-within:border-[#f47736]">
                  <Lock size={18} className="shrink-0 text-[#999]" />
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className={inputClass}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="text-[#888] hover:text-[#f47736]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="signup-confirm" className="mb-2 block text-sm font-semibold">
                  Confirm password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] px-4 focus-within:border-[#f47736]">
                  <Lock size={18} className="shrink-0 text-[#999]" />
                  <input
                    id="signup-confirm"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter your password again"
                    className={inputClass}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="text-[#888] hover:text-[#f47736]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f47736] py-4 text-sm font-bold text-white transition hover:bg-[#df6428]"
              >
                Create account <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#777]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-[#f47736] hover:text-[#df6428]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;