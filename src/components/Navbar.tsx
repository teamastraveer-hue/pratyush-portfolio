import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { BRAND_LOGO_URL } from '../data/portfolioData';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAEAF2] bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-[#1E1E2D] dark:bg-[#0B0B11]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo & Wordmark */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg focus-visible:outline-none"
        >
          <img
            src={BRAND_LOGO_URL}
            alt="Pratyush P Logo"
            referrerPolicy="no-referrer"
            className="h-9 w-9 shrink-0 rounded-lg bg-black object-contain p-0.5 ring-1 ring-black/10 dark:ring-white/15"
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-[#292943] dark:text-white">
            PRATYUSH<span className="text-[#7050F5]">.</span>
          </span>
        </a>

        {/* Center/Right: Desktop Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative shrink-0 whitespace-nowrap py-1 text-sm font-medium text-[#54546E] transition-colors duration-200 hover:text-[#292943] dark:text-[#A8A8BE] dark:hover:text-white"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-[#7050F5] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Top-Right Controls: Dark/Light Toggle & Mobile Menu Trigger */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
            title={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6E6F0] bg-[#F8F8FC] text-[#292943] transition-colors duration-200 hover:border-[#7050F5]/40 hover:bg-[#7050F5]/8 hover:text-[#7050F5] dark:border-[#242436] dark:bg-[#14141E] dark:text-[#F4F4F8] dark:hover:border-[#7050F5]/50 dark:hover:bg-[#7050F5]/15 dark:hover:text-[#9D85FF]"
          >
            {theme === 'dark' ? (
              <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6E6F0] bg-[#F8F8FC] text-[#292943] transition-colors duration-200 hover:border-[#7050F5]/40 hover:text-[#7050F5] md:hidden dark:border-[#242436] dark:bg-[#14141E] dark:text-[#F4F4F8]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#EAEAF2] bg-white px-4 py-4 md:hidden dark:border-[#1E1E2D] dark:bg-[#0B0B11]"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-[#292943] transition-colors hover:bg-[#F4F3FC] hover:text-[#7050F5] dark:text-[#E8E8F2] dark:hover:bg-[#181826] dark:hover:text-[#9D85FF]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
