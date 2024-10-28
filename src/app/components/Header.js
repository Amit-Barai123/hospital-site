import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo-maharaju.svg" // Ensure this path is correct
          alt="Maharaju logo"
          width={70}
          height={70}
        
        />
       
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-900 hover:text-pink-400 font-medium transition-colors">
          Home
        </Link>
        <Link href="/services" className="text-gray-900 hover:text-pink-400 font-medium transition-colors">
          Services
        </Link>
        <Link href="/about" className="text-gray-900 hover:text-pink-400 font-medium transition-colors">
          About
        </Link>
        <Link href="/testimonials" className="text-gray-900 hover:text-pink-400 font-medium transition-colors">
          Testimonials
        </Link>
        <Link href="/clients" className="text-gray-900 hover:text-pink-400 font-medium transition-colors">
          Clients
        </Link>
        <Link href="/contact" className="text-gray-900 hover:text-pink-400 font-medium transition-colors">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-900 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
