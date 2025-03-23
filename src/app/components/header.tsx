import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-green-600 text-white shadow-lg bg-opacity-1">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-purple-200 transition duration-300"
          >
            Alfie Lamerton
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://substack.com/@alfielamerton"
                className="hover:text-indigo-600 transition duration-300"
              >
                Substack
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
