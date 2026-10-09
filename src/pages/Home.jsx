
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  BedDouble,
  Bath,
  Maximize,
  House,
  Building2,
  Trees,
  SlidersHorizontal,
} from "lucide-react";

import { properties } from "../data/properties";

function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const categories = [
    { name: "House", icon: House, description: "A place of your own" },
    { name: "Villa", icon: Trees, description: "Room for luxury" },
    { name: "Apartment", icon: Building2, description: "Made for city life" },
    { name: "Condo", icon: Building2, description: "Modern living" },
    { name: "Farmhouse", icon: Trees, description: "Escape the ordinary" },
  ];

  const searchHomes = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (type) params.set("type", type);

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-white text-[#181818]">
      {/* HERO */}
      <section className="px-4 pb-12 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid overflow-hidden rounded-3xl bg-[#f4f2ed] lg:min-h-[590px] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
              <div className="flex w-fit items-center gap-2 rounded-full border border-[#dedbd3] bg-white px-4 py-2 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#f47736]" />
                YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Find a place
                <br />
                to call
                <br />
                <span className="text-[#f47736]">your own.</span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#686868] sm:text-base">
                Discover homes that match your lifestyle, your ambitions,
                and the way you want to live.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/properties"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#f47736] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#df6428]"
                >
                  Explore properties
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/agents"
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold hover:text-[#f47736]"
                >
                  Meet our agents
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#dedbd3] pt-6">
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="mt-1 text-xs text-[#777]">Listed homes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="mt-1 text-xs text-[#777]">Expert agents</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="mt-1 text-xs text-[#777]">Home styles</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[340px] sm:min-h-[480px] lg:min-h-full">
              <img
                src={
                  properties.find((property) => property.type === "Villa")
                    ?.image || properties[0]?.image
                }
                alt="Featured property"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

              <div className="absolute left-5 top-5 rounded-xl bg-white px-4 py-3 sm:left-8 sm:top-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#777]">
                  Find your happy place
                </p>
                <p className="mt-1 text-sm font-bold">A better way to move.</p>
              </div>

              <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/75">
                    Your dream address
                  </p>
                  <p className="mt-2 text-2xl font-bold sm:text-3xl">
                    Starts right here.
                  </p>
                </div>

                <Link
                  to="/properties"
                  aria-label="Browse properties"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f47736] transition hover:bg-white hover:text-black"
                >
                  <ArrowUpRight size={23} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <form
          onSubmit={searchHomes}
          className="grid gap-4 rounded-2xl border border-[#e9e9e9] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end lg:p-6"
        >
          <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#777]">
              Location
            </label>
            <div className="flex items-center gap-3 rounded-xl bg-[#f6f6f6] px-4 py-4">
              <MapPin size={18} className="shrink-0 text-[#f47736]" />
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Enter city or location"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#777]">
              Property type
            </label>
            <div className="flex items-center gap-3 rounded-xl bg-[#f6f6f6] px-4 py-4">
              <SlidersHorizontal
                size={18}
                className="shrink-0 text-[#f47736]"
              />
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              >
                <option value="">All property types</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Farmhouse">Farmhouse</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-3 rounded-xl bg-[#181818] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#f47736]"
          >
            <Search size={18} />
            Search homes
          </button>
        </form>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f47736]">
              Find your fit
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              What's your kind of home?
            </h2>
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold hover:text-[#f47736] sm:self-auto"
          >
            All properties
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;
            const property = properties.find(
              (item) => item.type === category.name
            );

            return (
              <Link
                key={category.name}
                to={`/properties?type=${encodeURIComponent(category.name)}`}
                className="group overflow-hidden rounded-2xl border border-[#ededed] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#f47736] hover:shadow-lg"
              >
                <div className="relative h-36 overflow-hidden bg-[#f2f0eb] sm:h-44">
                  {property?.image ? (
                    <img
                      src={property.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Icon size={42} className="text-[#f47736]" />
                    </div>
                  )}

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-bold">{category.name}s</h3>
                  <p className="mt-1 text-xs text-[#777]">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED HOMES */}
      <section className="bg-[#f7f7f5] py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f47736]">
                Handpicked for you
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Homes worth a look.
              </h2>
              <p className="mt-3 text-sm text-[#777]">
                Explore some of our latest listings.
              </p>
            </div>

            <Link
              to="/properties"
              className="inline-flex items-center gap-2 self-start rounded-xl border border-[#dedede] bg-white px-5 py-3 text-sm font-semibold transition hover:border-[#f47736] hover:text-[#f47736] sm:self-auto"
            >
              See all listings
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 6).map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="group overflow-hidden rounded-2xl border border-[#eaeaea] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden sm:h-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-bold">
                    {property.type}
                  </span>

                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white transition group-hover:bg-[#f47736] group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs text-[#777]">
                    <MapPin size={14} className="text-[#f47736]" />
                    {property.location}
                  </p>

                  <h3 className="mt-3 text-xl font-bold transition group-hover:text-[#e66a2d]">
                    {property.title}
                  </h3>

                  <p className="mt-3 text-xl font-bold">
                    {formatPrice(property.price)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 border-t border-[#eee] pt-4 text-xs text-[#777]">
                    <span className="flex items-center gap-2">
                      <BedDouble size={16} />
                      {property.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath size={16} />
                      {property.bathrooms} Baths
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize size={15} />
                      {property.area} sq.ft
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#f47736] px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              Ready when you are
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Your next home is
              <br className="hidden sm:block" /> out there.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/85">
              Start exploring homes, compare your options, and find
              the place where your next chapter begins.
            </p>
          </div>

          <Link
            to="/properties"
            className="mt-8 inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#181818] transition hover:bg-[#181818] hover:text-white lg:mt-0"
          >
            Explore all homes
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;