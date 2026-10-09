import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email us",
      description: "Have a question? Send us a message.",
      value: "Contact our team online",
      href: "#contact-form",
    },
    {
      icon: Phone,
      title: "Talk to our team",
      description: "Get help with your property search.",
      value: "Request a callback",
      href: "#contact-form",
    },
    {
      icon: MapPin,
      title: "Our coverage",
      description: "Explore properties in multiple cities.",
      value: "Across India",
      href: "/properties",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-hidden bg-white text-[#181818]">
      {/* HERO SECTION */}
      <section className="bg-[#f7f7f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <Link
            to="/"
            className="text-sm font-medium text-[#777] transition hover:text-[#f47736]"
          >
            Home <span className="mx-2">/</span>
            <span className="text-[#181818]">Contact</span>
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(180px,0.6fr)] md:items-end lg:mt-12">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f47736]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#f47736]" />
                We're here to help
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Let's talk about
                <br />
                your <span className="text-[#f47736]">next move.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#777] sm:text-base">
                Whether you're searching for your dream home or need help
                exploring a property, we'd love to hear from you. Tell us what
                you need and let's get started.
              </p>
            </div>

            <div className="hidden justify-end md:flex">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#f47736] text-white lg:h-36 lg:w-36">
                <MessageCircle size={48} strokeWidth={1.3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-[#eaeaea] bg-white p-5 transition hover:-translate-y-1 hover:border-[#f47736] hover:shadow-lg sm:p-6 lg:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f47736]">
                  <Icon size={22} />
                </div>

                <h2 className="mt-5 text-lg font-bold">{item.title}</h2>

                <p className="mt-2 text-sm leading-6 text-[#777]">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-[#f47736]">
                  {item.value}
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24"
      >
        <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-[#eaeaea] bg-[#f7f7f5] md:rounded-3xl lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* LEFT PANEL - BLACK BOX REMOVED */}
          <div className="flex min-w-0 flex-col justify-between bg-[#f7f7f5] p-6 text-[#181818] sm:p-8 lg:p-10 xl:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f47736]">
                Get in touch
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Tell us what
                <br />
                you're looking for.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#777] sm:text-base">
                Our team can help you navigate your options and find
                properties that fit your needs.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f47736]">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">Send a message</p>
                  <p className="mt-1 text-xs leading-5 text-[#777] sm:text-sm">
                    Use the form and share your requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f47736]">
                  <Clock size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    When we're available
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#777] sm:text-sm">
                    Submit your enquiry anytime through this page.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/properties"
              className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#f47736] transition hover:text-[#181818]"
            >
              Browse properties <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* RIGHT PANEL */}
          <div className="min-w-0 bg-white p-5 sm:p-8 lg:p-10 xl:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Send us a message
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#777]">
              Fill in the details below. All fields are required.
            </p>

            {success && (
              <div
                role="status"
                className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700"
              >
                Thank you! Your message has been submitted in this demo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="block w-full min-w-0 rounded-xl border border-[#e5e5e5] bg-white px-4 py-3.5 text-sm text-[#181818] outline-none transition placeholder:text-[#aaa] focus:border-[#f47736] focus:ring-2 focus:ring-[#f47736]/10"
                    required
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="block w-full min-w-0 rounded-xl border border-[#e5e5e5] bg-white px-4 py-3.5 text-sm text-[#181818] outline-none transition placeholder:text-[#aaa] focus:border-[#f47736] focus:ring-2 focus:ring-[#f47736]/10"
                    required
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What can we help you with?"
                  className="block w-full min-w-0 rounded-xl border border-[#e5e5e5] bg-white px-4 py-3.5 text-sm text-[#181818] outline-none transition placeholder:text-[#aaa] focus:border-[#f47736] focus:ring-2 focus:ring-[#f47736]/10"
                  required
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you need..."
                  className="block w-full min-w-0 resize-y rounded-xl border border-[#e5e5e5] bg-white px-4 py-3.5 text-sm leading-6 text-[#181818] outline-none transition placeholder:text-[#aaa] focus:border-[#f47736] focus:ring-2 focus:ring-[#f47736]/10"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f47736] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#df6428] sm:w-fit"
              >
                Send message <Send size={17} />
              </button>

              <p className="text-xs leading-5 text-[#999]">
                This frontend demo displays a confirmation message but does
                not send your enquiry to an email address or server.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;