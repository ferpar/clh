import Link from 'next/link'
import styles from './Header.module.css'
import {getString} from '../../helpers/i18n'

function Header() {
  return (
    <header className={styles['site-header']}>
      <a>
        <h1>CLH</h1>
      </a>
      <nav>
        <ul className={styles['header-nav-links']}>
            <li className={styles['header-nav-link']}>
                <Link  href="/">{getString('HOME')}</Link>
            </li>
            <li className={styles['header-nav-link']}>
                <Link href="/cursos">{getString('COURSES')}</Link>
            </li>
            <li className={styles['header-nav-link']}>
                <Link href="/equipo">{getString('TEAM')}</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
