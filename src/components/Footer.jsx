
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function Footer() {
  const propertyTypes = [
    "House",
    "Villa",
    "Apartment",
    "Condo",
    "Farmhouse",
  ];

  return (
    <footer className="border-t border-[#e9e9e9] bg-white text-[#181818]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-16">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f47736] text-xl font-bold text-white">
              R
            </span>
            <span>
              <span className="block text-xl font-extrabold tracking-tight">
                REALTY
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#888]">
                Find your place
              </span>
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-[#777]">
            Discover homes that match your lifestyle. Explore properties,
            connect with experienced agents, and find a place to call your own.
          </p>

          <Link
            to="/properties"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f47736] hover:text-[#df6428]"
          >
            Explore properties <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold">Quick Links</h3>
          <div className="mt-6 flex flex-col gap-4">
            <Link to="/" className="w-fit text-sm text-[#777] hover:text-[#f47736]">
              Home
            </Link>
            <Link to="/properties" className="w-fit text-sm text-[#777] hover:text-[#f47736]">
              Properties
            </Link>
            <Link to="/agents" className="w-fit text-sm text-[#777] hover:text-[#f47736]">
              Our Agents
            </Link>
            <Link to="/contact" className="w-fit text-sm text-[#777] hover:text-[#f47736]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Property Types */}
        <div>
          <h3 className="text-sm font-bold">Property Types</h3>
          <div className="mt-6 flex flex-col gap-4">
            {propertyTypes.map((type) => (
              <Link
                key={type}
                to={`/properties?type=${encodeURIComponent(type)}`}
                className="w-fit text-sm text-[#777] hover:text-[#f47736]"
              >
                {type}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold">Get in Touch</h3>
          <p className="mt-5 text-sm leading-7 text-[#777]">
            Need help finding your next home? Get in touch with our team.
          </p>

          <div className="mt-5 flex items-start gap-3">
            <MapPin size={18} className="mt-1 shrink-0 text-[#f47736]" />
            <p className="text-sm leading-6 text-[#777]">
              Properties across India
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-4 flex items-center gap-3 text-sm text-[#777] hover:text-[#f47736]"
          >
            <Phone size={17} className="text-[#f47736]" />
            Contact our team
          </Link>

          <Link
            to="/contact"
            className="mt-4 flex items-center gap-3 text-sm text-[#777] hover:text-[#f47736]"
          >
            <Mail size={17} className="text-[#f47736]" />
            Send us a message
          </Link>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f47736] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#df6428]"
          >
            Contact Us <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e9e9e9]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-xs text-[#888]">
            © {new Date().getFullYear()} Realty. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#888]">
            <Link to="/contact" className="hover:text-[#f47736]">
              Help & Support
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center gap-1 font-semibold text-[#181818] hover:text-[#f47736]"
            >
              Find your home <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;