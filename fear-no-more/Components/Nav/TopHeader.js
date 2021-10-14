import Link from 'next/link'
import TopHeaderStyles from '../../styles/TopHeader.module.css'

export default function Header() {
  return (
    <div>
      <div className={TopHeaderStyles.background}>
        <div className={TopHeaderStyles.widthBlock}>
        <nav className={TopHeaderStyles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>Login or Register</a>
              </Link>
            </li>

          </ul>
        </nav>
        </div>
      </div>
    </div>
  )
}