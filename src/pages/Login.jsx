
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, House } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const success = login(email.trim(), password);

    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">

        {/* Left panel */}
        <div className="relative hidden min-h-[600px] flex-col justify-between overflow-hidden bg-[#181818] p-10 text-white md:flex lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#343434] via-[#181818] to-[#f47736]/40" />

          <Link to="/" className="relative flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f47736] font-bold">
              R
            </span>
            <span className="text-xl font-bold tracking-wide">REALTY</span>
          </Link>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb58d]">
              Find your place
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
              Welcome
              <br />
              back <span className="italic text-[#ff9b68]">home.</span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Your next chapter is waiting. Sign in to continue exploring
              properties and finding a place that feels right.
            </p>
          </div>

          <p className="relative text-xs text-white/50">
            Discover a better way to find your home.
          </p>
        </div>

        {/* Login form */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10 md:py-14 lg:px-14">
          <div className="w-full max-w-md">

            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#181818] md:hidden"
            >
              <House size={19} className="text-[#f47736]" />
              REALTY
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f47736]">
              Welcome back
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
              Sign in to Realty
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#777]">
              Enter your details below to access your account.
            </p>

            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-semibold">
                  Email address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] px-4 focus-within:border-[#f47736]">
                  <Mail size={18} className="shrink-0 text-[#999]" />
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full py-4 text-sm outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="login-password" className="mb-2 block text-sm font-semibold">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] px-4 focus-within:border-[#f47736]">
                  <Lock size={18} className="shrink-0 text-[#999]" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full py-4 text-sm outline-none"
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

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f47736] py-4 text-sm font-bold text-white transition hover:bg-[#df6428]"
              >
                Sign in <ArrowRight size={18} />
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#ededed]" />
              <span className="text-xs text-[#999]">NEW TO REALTY?</span>
              <div className="h-px flex-1 bg-[#ededed]" />
            </div>

            <Link
              to="/signup"
              className="block w-full rounded-xl border border-[#dedede] py-4 text-center text-sm font-bold transition hover:border-[#f47736] hover:text-[#f47736]"
            >
              Create an account
            </Link>

            <p className="mt-8 text-center text-xs leading-6 text-[#999]">
              By continuing, you agree to use Realty responsibly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;