// src/app/components/header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-purple-200 transition duration-300"
          >
            Your Name
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-purple-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-200 transition duration-300"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
