import React from "react";;

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-pink-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            {/* Logo */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <img src={'logo.avif'} alt="FundRaise Logo" className="h-10 w-auto" />
              </div>
              <span className="text-pink-100 text-lg font-bold">
                SheCanFoundation
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-pink-200">
            Empowering interns to make a difference through fundraising.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-pink-100 font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                Get Started
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                How It Works
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-pink-100 font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-pink-100 font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300 transition text-pink-200">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 pt-4 text-center text-sm text-pink-300">
        &copy; {new Date().getFullYear()} SheCanFoundation Portal. All rights reserved.
      </div>
    </footer>
  );
}
