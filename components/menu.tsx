import { useState } from 'react';
import Link from 'next/link';
import { Cross, Crosshair, CrosshairIcon, CrossIcon, LucideCross, LucideMenu, LucideX, MenuIcon } from 'lucide-react';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">NYRDDC</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link href="/programs" className="text-gray-700 hover:text-blue-500">Programs</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <LucideX/> : <LucideMenu/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex items-center justify-between px-4 py-2">
            <Link href="/" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>About</Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Programs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
