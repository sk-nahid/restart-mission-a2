const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10">

      {/* Left Side - Logo */}
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold text-primary cursor-pointer">
          Customer Support Zone
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex-none">

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li className="cursor-pointer hover:text-primary transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            Tickets
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            About
          </li>
        </ul>

        {/* New Ticket Button */}
        <button className="btn btn-primary btn-sm md:btn-md ml-4">
          + New Ticket
        </button>

      </div>
    </div>
  );
};

export default Navbar;