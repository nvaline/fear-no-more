import Link from 'next/link';
import headerStyles from '../../styles/Header.module.css';
import ContactUs from './ContactUs.js';
import AboutUs from './AboutUs.js';

export default function Header() {
  return (
    <div className={headerStyles.footer}>
      <div className={headerStyles.footer_block}>
          <AboutUs />
          <ContactUs />
      </div>
    </div>
  )
}