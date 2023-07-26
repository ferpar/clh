import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles['site-header']}>
      <a>
        <h1>CLH</h1>
      </a>
      <nav>
        <ul className={styles['header-nav-links']}>
            <li className={styles['header-nav-link']}>
                <Link  href="/">Inicio</Link>
            </li>
            <li className={styles['header-nav-link']}>
                <Link href="/cursos">Cursos</Link>
            </li>
            <li className={styles['header-nav-link']}>
                <Link href="/equipo">Equipo</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
