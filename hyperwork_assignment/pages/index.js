import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
     <ul>
      <li>
        <Link href="/Homepage">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/auction">
          <a>Auction Page</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}
