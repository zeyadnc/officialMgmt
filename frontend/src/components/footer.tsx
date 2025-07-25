import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-black">MyBrand</h2>
            <p className="text-gray-600 mt-2 max-w-sm">
              Empowering people through clean design and powerful tools.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h4 className="text-black font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <Link to="/about" className="hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-black">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-black">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <Link to="/contact" className="hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-black">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:text-black">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
