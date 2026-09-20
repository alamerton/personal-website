import Link from "next/link";

const navLinks = [
  { label: "Research", href: "/#research" },
  { label: "About", href: "/#about" },
  { label: "Substack", href: "https://substack.com/@alfielamerton" },
];

const Header = () => {
  return (
    <header className="site-header">
      <nav aria-label="Main" className="site-nav">
        <Link href="/" className="site-name">
          Alfie Lamerton
        </Link>
        <ul className="site-nav-links">
          {navLinks.map(({ label, href }) => {
            const isExternal = href.startsWith("http");
            return (
              <li key={href}>
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-nav-link"
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href} className="site-nav-link">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
