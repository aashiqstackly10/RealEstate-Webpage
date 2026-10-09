import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  House,
} from "lucide-react";

import agent1 from "../assets/images/properties/agents/agent1.jpg";
import agent2 from "../assets/images/properties/agents/agent2.jpg";
import agent3 from "../assets/images/properties/agents/agent3.jpg";

const agents = [
  {
    id: 1,
    name: "Olivia Bennett",
    role: "Senior Real Estate Agent",
    image: agent1,
    location: "Chennai, India",
    experience: "8 years experience",
    properties: 48,
    specialty: "Luxury Homes",
    phone: "+91 98765 43210",
    email: "olivia@example.com",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Property Consultant",
    image: agent2,
    location: "Bengaluru, India",
    experience: "6 years experience",
    properties: 36,
    specialty: "Apartments",
    phone: "+91 98765 43211",
    email: "james@example.com",
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Real Estate Specialist",
    image: agent3,
    location: "Coimbatore, India",
    experience: "5 years experience",
    properties: 29,
    specialty: "Family Homes",
    phone: "+91 98765 43212",
    email: "sophia@example.com",
  },
];

function AgentCard({ agent }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Agent image */}
      <div className="relative h-72 overflow-hidden bg-[#f7f7f5]">
        <img
          src={agent.image}
          alt={agent.name}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#f47736] shadow-sm">
          {agent.specialty}
        </span>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-white">
          <MapPin size={15} />
          <span>{agent.location}</span>
        </div>
      </div>

      {/* Agent details */}
      <div className="p-6">
        <p className="mb-2 text-sm font-medium text-[#f47736]">
          {agent.role}
        </p>

        <h2 className="text-xl font-semibold text-[#181818]">
          {agent.name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">{agent.experience}</p>

        <div className="my-5 flex items-center gap-2 border-y border-gray-100 py-4 text-sm text-gray-600">
          <House size={17} className="text-[#f47736]" />
          <span>{agent.properties} properties handled</span>
        </div>

        <div className="space-y-3">
          <a
            href={`tel:${agent.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#f47736]"
          >
            <Phone size={16} className="text-[#f47736]" />
            {agent.phone}
          </a>

          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-3 break-all text-sm text-gray-600 transition hover:text-[#f47736]"
          >
            <Mail size={16} className="shrink-0 text-[#f47736]" />
            {agent.email}
          </a>
        </div>

        <Link
          to={`/agents/${agent.id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#181818] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f47736]"
        >
          View Profile
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default function Agents() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-[#f7f7f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-[#f47736]">
              <Users size={16} />
              Meet our professionals
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#181818] sm:text-5xl lg:text-6xl">
              Meet the people behind your
              <span className="text-[#f47736]"> next move.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Finding the right property starts with the right people. Our
              experienced agents are here to guide you through every step of
              your real estate journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#our-agents"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f47736] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e76627]"
              >
                Explore our agents
                <ArrowUpRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#181818] transition hover:border-[#f47736] hover:text-[#f47736]"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-7">
              <div>
                <p className="text-3xl font-semibold text-[#181818]">12+</p>
                <p className="mt-1 text-sm text-gray-500">Expert agents</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#181818]">250+</p>
                <p className="mt-1 text-sm text-gray-500">Happy clients</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#181818]">10+</p>
                <p className="mt-1 text-sm text-gray-500">Years of trust</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-[#f47736]/10 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-sm">
              <img
                src={agent1}
                alt="Real estate professional"
                className="h-[340px] w-full rounded-2xl object-cover object-center sm:h-[440px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#f47736]">
                    <Award size={24} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#181818]">
                      Personal guidance, every step
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Your goals. Our expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent cards */}
      <section
        id="our-agents"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f47736]">
                Our team
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#181818] sm:text-4xl">
                Meet your property experts
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                Friendly professionals who understand the market and help you
                make confident property decisions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={18} className="text-[#f47736]" />
              {agents.length} featured agents
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#f7f7f5] p-7 sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#f47736]">
              Let's find your place
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#181818] sm:text-4xl">
              Have questions about your next property?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Tell us what you are looking for, and our team will help you
              explore your options.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-[#f47736] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#e76627] lg:self-center"
          >
            Talk to our team
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}