// app/components/Footer.tsx

import { FC } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer
      style={{
        padding: '16px 32px',
        marginTop: 'auto',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className='flex justify-between flex-col gap-6 lg:flex-row'>
          {/* Column 1 */}
          <div>
            <h6 className='font-bold'>Believer's Tech Expo</h6>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className='font-bold'>Links</h6>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
            <br />
            <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
              About
            </Link>
            <br />
            < Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              ContactUs
            </Link>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className='font-bold'>Contact Us</h6>
            <p>
              <a href="mailto:contact@cultured.com" style={{ color: 'inherit' }}>
                <span className='font-bold'>Email</span>: contact@bte.com
              </a>
            </p>

            {/* Social Media Icons */}
            <div style={{ marginTop: '16px', display: 'flex' }}>
              <a href="https://facebook.com" style={{ marginRight: '8px' }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" style={{ marginRight: '8px' }}>
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" style={{ marginRight: '8px' }}>
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" style={{ marginRight: '8px' }}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
