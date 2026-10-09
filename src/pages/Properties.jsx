
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  ArrowUpRight,
  X,
  House,
} from "lucide-react";

import PropertyCard from "../components/PropertyCard";
import { properties as propertyData } from "../data/properties";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [maxPrice, setMaxPrice] = useState("Any");
  const [bedrooms, setBedrooms] = useState("Any");
  const [showFilters, setShowFilters] = useState(false);

  const propertyTypes = [
    "All",
    "House",
    "Apartment",
    "Villa",
    "Condo",
    "Farmhouse",
  ];

  const filteredProperties = useMemo(() => {
    return propertyData.filter((property) => {
      const searchText = search.toLowerCase();

      const matchesSearch = [
        property.title,
        property.location,
        property.type,
        property.city,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(searchText));

      const matchesType =
        selectedType === "All" ||
        String(property.type || "").toLowerCase() ===
          selectedType.toLowerCase();

      const price = Number(
        String(property.price ?? "").replace(/[^\d.]/g, "")
      );

      const matchesPrice =
        maxPrice === "Any" ||
        (Number.isFinite(price) && price <= Number(maxPrice));

      const matchesBedrooms =
        bedrooms === "Any" ||
        Number(property.bedrooms ?? property.beds ?? 0) >=
          Number(bedrooms);

      return (
        matchesSearch &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms
      );
    });
  }, [search, selectedType, maxPrice, bedrooms]);

  const clearFilters = () => {
    setSearch("");
    setSelectedType("All");
    setMaxPrice("Any");
    setBedrooms("Any");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Page hero */}
      <section className="bg-[#f7f7f5] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="transition hover:text-[#f47736]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#181818]">Properties</span>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-[#f47736]">
                <House size={16} />
                Find your perfect place
              </span>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#181818] sm:text-5xl lg:text-6xl">
                Discover a place
                <br />
                <span className="text-[#f47736]">you'll love to call home.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Explore thoughtfully selected homes, apartments, villas, and
                more. Find a property that fits your lifestyle and budget.
              </p>
            </div>

            <div className="flex gap-6 border-t border-gray-200 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="text-3xl font-semibold text-[#181818]">
                  {propertyData.length}+
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Listed properties
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#181818]">6</p>
                <p className="mt-1 text-sm text-gray-500">
                  Property categories
                </p>
              </div>
            </div>
          </div>

          {/* Search panel */}
          <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-[#f7f7f5] px-4">
                <Search size={20} className="shrink-0 text-[#f47736]" />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by property name or location..."
                  className="w-full bg-transparent py-4 text-sm text-[#181818] outline-none placeholder:text-gray-400"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="text-gray-400 hover:text-[#f47736]"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-4 text-sm font-semibold transition ${
                  showFilters
                    ? "border-[#f47736] bg-[#fff0e7] text-[#f47736]"
                    : "border-gray-200 bg-white text-[#181818] hover:border-[#f47736]"
                }`}
              >
                <SlidersHorizontal size={17} />
                Filters
              </button>

              <button
                type="button"
                onClick={clearFilters}
                className="rounded-xl bg-[#f47736] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#e76627]"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties section */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Type filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  selectedType === type
                    ? "bg-[#f47736] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#f47736] hover:text-[#f47736]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            {/* Optional sidebar filters */}
            {showFilters && (
              <aside className="rounded-2xl border border-gray-100 bg-[#f7f7f5] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-semibold text-[#181818]">
                    Refine search
                  </h2>

                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    aria-label="Close filters"
                    className="text-gray-500 hover:text-[#f47736]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Maximum price
                </label>

                <select
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="mb-5 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#f47736]"
                >
                  <option value="Any">Any price</option>
                  <option value="5000000">Up to ₹50 lakh</option>
                  <option value="10000000">Up to ₹1 crore</option>
                  <option value="20000000">Up to ₹2 crore</option>
                </select>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Minimum bedrooms
                </label>

                <select
                  value={bedrooms}
                  onChange={(event) => setBedrooms(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#f47736]"
                >
                  <option value="Any">Any</option>
                  <option value="1">1+ bedrooms</option>
                  <option value="2">2+ bedrooms</option>
                  <option value="3">3+ bedrooms</option>
                  <option value="4">4+ bedrooms</option>
                </select>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-[#181818] transition hover:border-[#f47736] hover:text-[#f47736]"
                >
                  Reset filters
                </button>
              </aside>
            )}

            <div className={showFilters ? "" : "lg:col-span-2"}>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-[#181818]">
                    Available properties
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Showing {filteredProperties.length} of{" "}
                    {propertyData.length} properties
                  </p>
                </div>

                <span className="rounded-full bg-[#fff0e7] px-4 py-2 text-sm font-medium text-[#f47736]">
                  <MapPin size={15} className="mr-1 inline" />
                  Explore listings
                </span>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-gray-100 bg-[#f7f7f5] px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#f47736]">
                    <Search size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#181818]">
                    No properties found
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Try changing your search or removing some filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f47736] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e76627]"
                  >
                    Reset search
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}