import { Link } from "react-router-dom";
import { Building2, Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-16">
      <div className="max-w-lg text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <Building2 size={40} />
        </div>

        <p className="mt-8 text-7xl font-bold text-blue-600">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-4 leading-7 text-slate-500">
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
}

export default NotFound;