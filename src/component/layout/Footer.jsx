import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri"
import { CiTwitter } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        
        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Exclusive</h3>
          <p className="text-sm font-bold mb-2">Subscribe</p>
          <p className="text-sm mb-3">Get 10% off your first order</p>
          <form className="flex gap-2">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email"
              className="flex-1 text-sm border px-3 py-2 rounded-l-md w-[30px] text-white"
              required
            />
            <button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 text-sm rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Support</h3>
          <address className="not-italic text-sm leading-6">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh <br />
            <a href="mailto:exclusive@gmail.com" className="block hover:underline">
              exclusive@gmail.com
            </a>
            <a href="tel:+88015888889999" className="block hover:underline">
              +88015-88888-9999
            </a>
          </address>
        </div>

        {/* Account Section */}
        <nav aria-label="Account Links">
          <h3 className="font-semibold mb-3 text-lg">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Social & Apps */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Download App</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:underline">Google Play</a></li>
            <li><a href="#" className="hover:underline">App Store</a></li>
          </ul>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-red-500"><RiFacebookLine size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-red-500"><CiTwitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-red-500"><FaInstagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-red-500"><RiLinkedinLine size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} M.O WebDev Nigeria. All rights reserved.
      </div>
    </footer>
  )
}
