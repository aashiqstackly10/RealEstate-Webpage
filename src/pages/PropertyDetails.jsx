import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";

import { properties } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [saved, setSaved] = useState(false);

  if (!property) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Property Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The property you are looking for does not exist.
          </p>

          <Link
            to="/properties"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Browse Properties
          </Link>
        </div>
      </div>
    );
  }

  const images = property.images || [property.image];

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* BACK BUTTON */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Properties
        </Link>
      </div>

      {/* PROPERTY DETAILS */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

          {/* IMAGE GALLERY */}
          <div>

            {/* MAIN IMAGE */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-200 md:h-[520px]">

              <img
                src={images[selectedImage]}
                alt={property.title}
                className="h-full w-full object-cover"
              />

              <button
                onClick={() => setSaved(!saved)}
                className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ${
                  saved
                    ? "text-red-500"
                    : "text-slate-600 hover:text-red-500"
                }`}
              >
                <Heart
                  size={21}
                  fill={saved ? "currentColor" : "none"}
                />
              </button>

              <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                {property.type}
              </span>

            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 grid grid-cols-3 gap-4">

              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`h-24 overflow-hidden rounded-xl border-2 ${
                    selectedImage === index
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* PROPERTY INFORMATION */}
          <div>

            <p className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={17} className="text-blue-600" />
              {property.location}
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {property.title}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-600">
              {formattedPrice}
            </p>

            {/* PROPERTY FEATURES */}
            <div className="mt-7 grid grid-cols-3 gap-3">

              <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                <BedDouble
                  size={22}
                  className="mx-auto text-blue-600"
                />

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.bedrooms}
                </p>

                <p className="text-xs text-slate-500">
                  Bedrooms
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                <Bath
                  size={22}
                  className="mx-auto text-blue-600"
                />

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.bathrooms}
                </p>

                <p className="text-xs text-slate-500">
                  Bathrooms
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200">
                <Ruler
                  size={22}
                  className="mx-auto text-blue-600"
                />

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.area}
                </p>

                <p className="text-xs text-slate-500">
                  Sq. Ft.
                </p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">

              <h2 className="text-xl font-bold text-slate-900">
                About this property
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                This beautiful {property.type.toLowerCase()} is located
                in {property.location}. It offers comfortable living
                spaces, modern features and a convenient location.
                With {property.bedrooms} bedrooms and{" "}
                {property.bathrooms} bathrooms, this property is
                perfect for families looking for a comfortable and
                stylish home.
              </p>

            </div>

            {/* CONTACT AGENT */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

              <h2 className="text-lg font-bold text-slate-900">
                Interested in this property?
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Get in touch with our property agent today.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  <Phone size={17} />
                  Call Agent
                </button>

                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  <Mail size={17} />
                  Email Agent
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default PropertyDetails;