const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary">
            Customer Support Zone
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            A modern customer ticket management system built with React.
            Track, manage, and resolve customer issues efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Tickets</li>
            <li className="hover:text-primary cursor-pointer">About</li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@example.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Available: 9 AM – 6 PM</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Customer Support Zone. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;