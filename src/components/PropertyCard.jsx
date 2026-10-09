
import { Link } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpRight,
  Heart,
} from "lucide-react";

export default function PropertyCard({ property }) {
  if (!property) return null;

  const {
    id,
    title,
    location,
    price,
    image,
    images,
    type,
    bedrooms,
    beds,
    bathrooms,
    baths,
    area,
    size,
  } = property;

  const propertyImage =
    image || (Array.isArray(images) ? images[0] : null);

  const formatPrice = (value) => {
    if (typeof value === "number") {
      return `₹${value.toLocaleString("en-IN")}`;
    }

    return value || "Price on request";
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Property image */}
      <div className="relative h-56 overflow-hidden bg-[#f7f7f5]">
        {propertyImage ? (
          <img
            src={propertyImage}
            alt={title || "Property"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            <Maximize size={36} />
          </div>
        )}

        {/* Property type */}
        {type && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#f47736] shadow-sm">
            {type}
          </span>
        )}

        {/* Wishlist icon */}
        <button
          type="button"
          aria-label="Add property to wishlist"
          onClick={() =>
            window.alert("Wishlist functionality can be connected here.")
          }
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#181818] transition hover:bg-[#f47736] hover:text-white"
        >
          <Heart size={17} />
        </button>
      </div>

      {/* Property information */}
      <div className="p-5">
        <p className="text-lg font-bold text-[#f47736]">
          {formatPrice(price)}
        </p>

        <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-[#181818]">
          {title || "Beautiful Property"}
        </h3>

        {location && (
          <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} className="shrink-0 text-[#f47736]" />
            <span className="line-clamp-1">{location}</span>
          </p>
        )}

        {/* Property features */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-gray-100 py-4 text-sm text-gray-600">
          {(bedrooms ?? beds) != null && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={17} className="text-[#f47736]" />
              {bedrooms ?? beds} Beds
            </span>
          )}

          {(bathrooms ?? baths) != null && (
            <span className="flex items-center gap-1.5">
              <Bath size={17} className="text-[#f47736]" />
              {bathrooms ?? baths} Baths
            </span>
          )}

          {(area ?? size) != null && (
            <span className="flex items-center gap-1.5">
              <Maximize size={16} className="text-[#f47736]" />
              {area ?? size} sq.ft.
            </span>
          )}
        </div>

        {/* View property button */}
        <Link
          to={`/properties/${id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#181818] px-5 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#f47736]"
        >
          View Property
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}