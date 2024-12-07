import Link from "next/link";
import { faker } from "@faker-js/faker";

export default function Footer() {
  const LoremShort = faker.lorem.paragraph(1);
  return (
    <footer className="bg-color-bg mt-12 py-8 border-t border-color-border">
      <div className="max-w-7xl mx-auto px-6 text-color-text flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-color-primary font-bold text-2xl">BTE</h2>
          <p className="mt-2 text-sm">{LoremShort}</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:text-color-primary">
              Home
            </Link>
            <Link href="/about" className="hover:text-color-primary">
              About Us
            </Link>
            <Link href="/about" className="hover:text-color-primary">
              about
            </Link>
            <Link href="/contact" className="hover:text-color-primary">
              contact
            </Link>
            <Link href="/contact" className="hover:text-color-primary">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-color-primary">
          <Link
            href="https://www.facebook.com"
            aria-label="Facebook"
            target="_blank"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.98 3.66 9.12 8.44 9.95v-7.03h-2.54V12h2.54V9.89c0-2.51 1.52-3.89 3.74-3.89 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.99h-2.3v7.03C18.34 21.2 22 17.06 22 12.07z" />
            </svg>
          </Link>
          <Link
            href="https://www.twitter.com"
            aria-label="Twitter"
            target="_blank"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.05 4.57a9.3 9.3 0 0 1-2.68.73 4.7 4.7 0 0 0 2.05-2.6 9.33 9.33 0 0 1-2.95 1.13 4.66 4.66 0 0 0-7.92 4.25 13.26 13.26 0 0 1-9.62-4.87 4.66 4.66 0 0 0 1.45 6.22 4.64 4.64 0 0 1-2.1-.58v.06a4.66 4.66 0 0 0 3.74 4.57 4.65 4.65 0 0 1-2.1.08 4.66 4.66 0 0 0 4.35 3.22 9.35 9.35 0 0 1-6.9 1.93 13.24 13.24 0 0 0 7.16 2.1c8.59 0 13.28-7.11 13.28-13.28 0-.2 0-.39-.02-.58A9.52 9.52 0 0 0 23.05 4.57z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com"
            aria-label="Instagram"
            target="_blank"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.16c3.16 0 3.54.01 4.79.07 1.24.06 2.08.27 2.55.45.63.25 1.08.56 1.56 1.03.47.48.78.93 1.03 1.56.18.47.39 1.31.45 2.55.06 1.25.07 1.63.07 4.79s-.01 3.54-.07 4.79c-.06 1.24-.27 2.08-.45 2.55-.25.63-.56 1.08-1.03 1.56-.48.47-.93.78-1.56 1.03-.47.18-1.31.39-2.55.45-1.25.06-1.63.07-4.79.07s-3.54-.01-4.79-.07c-1.24-.06-2.08-.27-2.55-.45-.63-.25-1.08-.56-1.56-1.03-.47-.48-.78-.93-1.03-1.56-.18-.47-.39-1.31-.45-2.55-.06-1.25-.07-1.63-.07-4.79s.01-3.54.07-4.79c.06-1.24.27-2.08.45-2.55.25-.63.56-1.08 1.03-1.56.48-.47.93-.78 1.56-1.03.47-.18 1.31-.39 2.55-.45C8.46 2.17 8.84 2.16 12 2.16M12 0C8.74 0 8.33.02 7.05.08c-1.3.06-2.18.28-2.95.57a5.94 5.94 0 0 0-2.16 1.22c-.67.67-1.11 1.32-1.44 2.16-.29.77-.51 1.65-.57 2.95C.02 8.33 0 8.74 0 12s.02 3.67.08 4.95c.06 1.3.28 2.18.57 2.95.33.84.77 1.49 1.44 2.16.67.67 1.32 1.11 2.16 1.44.77.29 1.65.51 2.95.57C8.33 23.98 8.74 24 12 24s3.67-.02 4.95-.08c1.3-.06 2.18-.28 2.95-.57.84-.33 1.49-.77 2.16-1.44.67-.67 1.11-1.32 1.44-2.16.29-.77.51-1.65.57-2.95.06-1.28.08-1.69.08-4.95s-.02-3.67-.08-4.95c-.06-1.3-.28-2.18-.57-2.95a5.94 5.94 0 0 0-1.22-2.16c-.67-.67-1.32-1.11-2.16-1.44-.77-.29-1.65-.51-2.95-.57C15.67.02 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a3.99 3.99 0 1 1 0-7.98 3.99 3.99 0 0 1 0 7.98zm6.24-10.83a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm text-color-text">
        <p>&copy; {new Date().getFullYear()} BTE. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
