import { BRAND_LOGO_URL, CONTACT_EMAIL } from '../data/portfolioData';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#EAEAF2] bg-white py-12 dark:border-[#1E1E2D] dark:bg-[#0B0B11]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Brand Summary */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 whitespace-nowrap"
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
            <p className="mt-3 text-sm font-medium text-[#5C5C77] dark:text-[#A4A4BC]">
              Graphic Designer &amp; Visual Creator
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-1 inline-block text-sm font-semibold text-[#7050F5] transition-colors hover:text-[#5E3EE0] dark:text-[#9B82FF] dark:hover:text-[#B8A5FF]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Quick Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-[#54546E] transition-colors hover:text-[#7050F5] dark:text-[#A4A4BC] dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-[#EFEFF6] pt-6 dark:border-[#1B1B29]">
          <p className="text-xs text-[#6E6E88] dark:text-[#8A8AA2]">
            &copy; 2026 Pratyush Kumar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
