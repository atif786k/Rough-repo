import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "For Districts",
    links: [
      "Admin Portal",
      "Perkins V Compliance",
      "Student Tracking",
      "Site Visit Logs",
      "Digital Forms",
    ],
  },
  {
    title: "For Employers",
    links: [
      "Admin Portal",
      "Post a Job",
      "Manage Placements",
      "Student Profiles",
      "Become a Partner",
    ],
  },
  {
    title: "For Students",
    links: [
      "Browse Jobs",
      "My Applications",
      "Work Log",
      "Career Profile",
      "Student Resources",
    ],
  },
  {
    title: "Company",
    links: [
      "Press",
      "About",
      "Careers",
      "Investors",
      "Browse Jobs",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#2750D9] text-white">
      {/* Main Content */}
      <div className="relative z-10 mx-auto px-40 pt-14 pb-28">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="max-w-xs">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <span className="text-2xl font-bold text-[#2750D9]">
                  Y
                </span>
              </div>

              <h2 className="text-[28px] font-semibold tracking-tight">
                Starteryou
              </h2>
            </div>

            {/* Newsletter */}
            <p className="mt-8 text-[15px] text-blue-100">
              Subscribe to our newsletter
            </p>

            {/* Input */}
            <div className="mt-4 flex h-[52px] overflow-hidden rounded-full bg-white p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="
                  flex-1
                  bg-transparent
                  px-5
                  text-sm
                  text-slate-700
                  outline-none
                  placeholder:text-slate-400
                "
              />

              <button
                className="
                  rounded-full
                  bg-[#3C8CFF]
                  px-6
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#3384fb]
                "
              >
                Send
              </button>
            </div>

            {/* Legal Links */}
            <div className="mt-8 flex flex-wrap gap-6 text-[14px] text-blue-100">
              <button className="hover:text-white">
                Terms
              </button>

              <button className="hover:text-white">
                Privacy
              </button>

              <button className="hover:text-white">
                Accessibility
              </button>
            </div>

            <p className="mt-10 text-[14px] text-blue-100">
              © 2026 Starteryou, Inc.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-12 md:grid-cols-4">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-medium">
                  {section.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <button
                        className="
                          text-left
                          text-[15px]
                          text-blue-100
                          transition
                          hover:text-white
                        "
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-white/20" />

        {/* Social */}
        <div className="mt-6 flex justify-end gap-5 text-blue-100">
          <button className="hover:text-white">
            <FaLinkedinIn size={18} />
          </button>

          <button className="hover:text-white">
            <FaInstagram  size={18} />
          </button>

          <button className="hover:text-white">
            <FaXTwitter size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="absolute inset-x-0 bottom-0 h-[180px] overflow-hidden">
        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(255,255,255,0.7) 14px, rgba(255,255,255,0.7) 15px)",
          }}
        />

        {/* Huge Background Text */}
        <div
          className="
            absolute
            left-1/2
            -top-10
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-[340px]
            font-bold
            leading-none
            tracking-tight
            text-white/[0.20]
          "
        >
          Starteryou
        </div>
      </div>
    </footer>
  );
};

export default Footer;