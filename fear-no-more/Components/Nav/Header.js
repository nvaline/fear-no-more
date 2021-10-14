import React, { useState } from 'react';

import Link from 'next/link'
import headerStyles from '../../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../../public/Logo.png'

import { ReactElement } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {

  const [isActive, setActive] = useState(true);

  const menuClick = () => {
    setActive(!isActive);
  }

  return (
    <div>
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.navbar_first_block}>
          <div className={headerStyles.navbar_block}>
            <div className={headerStyles.navbar_logo}>
              <Image src={Logo} className={headerStyles.navbar_logo_detail} alt='Logo' />
            </div>
            <ul className={isActive ? headerStyles.navbar_menu : headerStyles.navbar_menu_gone}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/listings/requests">
                  <a>Request</a>
                </Link>
              </li>
              <li>
                <Link href="/listings/offers">
                  <a>Offer</a>
                </Link>
              </li>
            </ul>
            <a href="#" className={headerStyles.navbar_toggleBtn} onClick={menuClick} >
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
        <div className={headerStyles.pageName}>
          <p>
            Share your love with ones who need
          </p>
        </div>
      </nav>
    </div>
  )
}