import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaSnapchatGhost } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Store & Customer Service */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Find a Store</h3>
              <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-600 transition">

                Choose Your Store
              </button>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Customer Service</h3>
              <p className="text-sm">Chat is unavailable</p>
            </div>
          </div>

          {/* Get the App & Alerts */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Get the App</h3>
              <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-600 transition">
                Download Now
              </button>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Get Sephora Text Alerts</h3>
              <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-600 transition">
                Sign up Now
              </button>
            </div>
          </div>

          {/* Credit Card */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sephora Credit Card Program</h3>
            <p className="text-sm mb-4">
              Want 25% off your Sephora purchase? <span className="underline cursor-pointer">DETAILS</span>
            </p>
          </div>

          {/* Email Signup */}
          <div>
            <h3 className="font-bold text-lg mb-4">We Belong to Something Beautiful</h3>
            <div className="mb-4">
              <p className="text-sm mb-2">Sign up for Sephora text updates</p>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Mobile Phone Number" 
                  className="border border-gray-300 px-3 py-2 text-sm flex-grow"
                />
                <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-600 transition">
                  Continue
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm mb-2">Sign up for Sephora Emails</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="border border-gray-300 px-3 py-2 text-sm flex-grow"
                />
                <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-600 transition">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Sephora */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Sephora</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">About Sephora</li>
              <li className="hover:underline cursor-pointer">Newsroom</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Sephora Values</li>
              <li className="hover:underline cursor-pointer">Supply Chain Transparency</li>
              <li className="hover:underline cursor-pointer">Affiliates</li>
              <li className="hover:underline cursor-pointer">Sephora Events</li>
              <li className="hover:underline cursor-pointer">Gift Cards</li>
              <li className="hover:underline cursor-pointer">Sephora Global Sites</li>
              <li className="hover:underline cursor-pointer">Diversity, Equity & Inclusion</li>
              <li className="hover:underline cursor-pointer">Sephora Accelerate</li>
              <li className="hover:underline cursor-pointer">Beauty (Re)Purposed</li>
              <li className="hover:underline cursor-pointer">Report a Vulnerability</li>
            </ul>
          </div>

          {/* My Sephora */}
          <div>
            <h3 className="font-bold text-lg mb-4">My Sephora</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Beauty Insider</li>
              <li className="hover:underline cursor-pointer">Sephora Credit Card</li>
              <li className="hover:underline cursor-pointer">Community Profile</li>
              <li className="hover:underline cursor-pointer">Order Status</li>
              <li className="hover:underline cursor-pointer">Purchase History</li>
              <li className="hover:underline cursor-pointer">Account Settings</li>
              <li className="hover:underline cursor-pointer">Beauty Advisor Recommendations</li>
              <li className="hover:underline cursor-pointer">Auto-Replenishment</li>
              <li className="hover:underline cursor-pointer">Beauty Offers</li>
              <li className="hover:underline cursor-pointer">Buying Guides</li>
              <li className="hover:underline cursor-pointer">Rewards Bazaar</li>
              <li className="hover:underline cursor-pointer">Loves</li>
              <li className="hover:underline cursor-pointer">Book a Reservation</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Customer Service</li>
              <li className="hover:underline cursor-pointer">Returns & Exchanges</li>
              <li className="hover:underline cursor-pointer">Delivery and Pickup Options</li>
              <li className="hover:underline cursor-pointer">Shipping</li>
              <li className="hover:underline cursor-pointer">Billing</li>
              <li className="hover:underline cursor-pointer">International Shipments</li>
              <li className="hover:underline cursor-pointer">Beauty Services FAQ</li>
              <li className="hover:underline cursor-pointer">Sephora at Kohl's</li>
              <li className="hover:underline cursor-pointer">Sephora at Hearst</li>
              <li className="hover:underline cursor-pointer">Store Locations</li>
              <li className="hover:underline cursor-pointer">Online Ordering</li>
              <li className="hover:underline cursor-pointer">Flexible Payments</li>
              <li className="hover:underline cursor-pointer">Accessibility</li>
            </ul>
          </div>

          {/* Region Selector */}
          <div>
            <h3 className="font-bold text-lg mb-4">Region & Language</h3>
            <div className="space-y-2 text-sm">
              <div className="hover:underline cursor-pointer">United States - English</div>
              <div className="hover:underline cursor-pointer">Canada - English</div>
              <div className="hover:underline cursor-pointer">Canada - Français</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <FaFacebook className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaPinterest className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaSnapchatGhost className="text-2xl cursor-pointer hover:text-gray-600" />
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Sephora USA, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;