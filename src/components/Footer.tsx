"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Artistic Background Wave */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-40 text-red-600"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,112C1120,117,1280,171,1360,197.3L1440,224V320H0Z"></path>
        </svg>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        {/* Glass Effect */}
        <div className="backdrop-blur-md bg-white/70 rounded-3xl shadow-2xl p-10 border border-white/20">
          {/* Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-3 lg:grid-cols-6"
          >
            {/* About */}
            <div className="col-span-2 lg:col-span-2">
              <h3 className="text-lg font-bold text-red-600">Let’s Connect</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Feel free to reach out to me through any of these platforms.
              </p>
              <ul className="flex mt-6 space-x-4">
                {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.25, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-red-400/50"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Info Links */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Info.mtc
              </p>
              <ul className="mt-6 space-y-3">
                {["About", "Features", "Works", "Career"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative inline-block text-base text-gray-700 transition-all group"
                    >
                      <span className="group-hover:text-red-600">{item}</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Help.mtc
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Customer Support",
                  "Delivery Details",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative inline-block text-base text-gray-700 transition-all group"
                    >
                      <span className="group-hover:text-red-600">{item}</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branding */}
            <div className="col-span-2 lg:col-span-2">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
                H A Z I K – Q A I M K H A N I
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Crafting digital experiences that blend art, design, and
                technology.
              </p>
            </div>
          </motion.div>

          {/* Animated Gradient Divider */}
          <div className="relative mt-16">
            <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
          </div>

          {/* Copyright */}
          <p className="mt-10 text-sm text-center text-gray-600">
            © {new Date().getFullYear()} All Rights Reserved by Asaverea.Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
