import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Works",
    href: "#works"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <nav className="container mx-auto px-6 py-0 mt-[30px] flex items-end justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-auto h-auto overflow-visible m-0">
            <img src="/images/logo-2-2025green.png" width={120} alt="Nord profile" className="w-160" />
          </div>
          <span className="hidden sm:block text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Passion in Brand
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(item => <li key={item.label}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>)}
        </ul>

        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>;
};
export default Navbar;