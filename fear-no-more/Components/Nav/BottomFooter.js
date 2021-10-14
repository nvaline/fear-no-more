import Link from 'next/link'
import TopHeaderStyles from '../../styles/TopHeader.module.css'

export default function Header() {
  return (
    <div>
      <div className={TopHeaderStyles.copyRight}>
        <p>
          copyright © 2021 Fear No More
        </p>
      </div>
    </div>
  )
}