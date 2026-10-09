import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  ArrowLeft,
  Send,
} from "lucide-react";

import agent1 from "../assets/images/agents/agent1.jpg";
import agent2 from "../assets/images/agents/agent2.jpg";
import agent3 from "../assets/images/agents/agent3.jpg";

import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

function AgentDetails() {
  const { id } = useParams();

  const agents = {
    1: {
      name: "Brain",
      role: "Senior Property Consultant",
      location: "Bangalore, India",
      phone: "+91 98765 43210",
      email: "arjun@realty.com",
      rating: 4.9,
      reviews: 128,
      experience: "8 Years",
      image: agent1,
      description:
        "Arjun is an experienced property consultant specializing in residential properties and luxury homes. He helps clients find properties that match their lifestyle and budget.",
    },

    2: {
      name: "Carolyn",
      role: "Luxury Property Specialist",
      location: "Chennai, India",
      phone: "+91 98765 12345",
      email: "priya@realty.com",
      rating: 4.8,
      reviews: 96,
      experience: "6 Years",
      image: agent2,
      description:
        "Priya specializes in premium apartments, villas and luxury properties. Her strong knowledge of the local market helps clients make confident property decisions.",
    },

    3: {
      name: "Richard",
      role: "Residential Property Advisor",
      location: "Hyderabad, India",
      phone: "+91 91234 56789",
      email: "rahul@realty.com",
      rating: 4.9,
      reviews: 114,
      experience: "7 Years",
      image: agent3,
      description:
        "Rahul is a trusted residential property advisor who focuses on helping families discover comfortable and affordable homes in excellent locations.",
    },
  };

  const agent = agents[id];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!agent) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Agent Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The agent you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Home
          </Link>

        </div>
      </div>
    );
  }

  const agentProperties = properties.filter(
    (property) =>
      property.location.split(",")[0] ===
      agent.location.split(",")[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${name}! Your message has been sent.`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* BACK */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

      </div>

      {/* AGENT PROFILE */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">

          <div className="grid lg:grid-cols-[350px_1fr]">

            {/* IMAGE */}
            <div className="h-[350px] lg:h-full">

              <img
                src={agent.image}
                alt={agent.name}
                className="h-full w-full object-cover"
              />

            </div>

            {/* INFORMATION */}
            <div className="p-8 md:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Agent
              </p>

              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                {agent.name}
              </h1>

              <p className="mt-2 text-lg text-slate-500">
                {agent.role}
              </p>

              {/* RATING */}
              <div className="mt-5 flex items-center gap-2">

                <div className="flex items-center gap-1 text-yellow-500">

                  <Star size={19} fill="currentColor" />
                  <span className="font-bold">
                    {agent.rating}
                  </span>

                </div>

                <span className="text-sm text-slate-500">
                  ({agent.reviews} reviews)
                </span>

              </div>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin
                    size={19}
                    className="text-blue-600"
                  />
                  {agent.location}
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Phone
                    size={19}
                    className="text-blue-600"
                  />
                  {agent.phone}
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Mail
                    size={19}
                    className="text-blue-600"
                  />
                  {agent.email}
                </div>

              </div>

              {/* EXPERIENCE */}
              <div className="mt-7 flex gap-8 border-t border-slate-200 pt-6">

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {agent.experience}
                  </p>

                  <p className="text-sm text-slate-500">
                    Experience
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {agentProperties.length}+
                  </p>

                  <p className="text-sm text-slate-500">
                    Local Listings
                  </p>
                </div>

              </div>

              <p className="mt-7 max-w-2xl leading-7 text-slate-500">
                {agent.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AGENT PROPERTIES */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Listings
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Properties by {agent.name}
          </h2>

        </div>

        {agentProperties.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {agentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

          </div>
        ) : (
          <p className="mt-6 text-slate-500">
            No properties available.
          </p>
        )}

      </section>

      {/* CONTACT FORM */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Contact {agent.name}
            </h2>

            <p className="mt-3 text-slate-500">
              Have questions about a property? Send a message
              and our agent will get back to you.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"
          >

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="5"
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default AgentDetails;