import styles from './Footer.module.css';
import Link from 'next/link'
import {getString} from '../../helpers/i18n'

function Footer() {
  return (
    <footer className={styles['site-footer']}>
      <nav>
        <ul className={styles['footer-nav-links']}>
            <li className={styles['footer-nav-link']}>
                <Link  href="/aviso-legal">{getString('LEGAL')}</Link>
            </li>
            <li className={styles['footer-nav-link']}>
                <Link href="/politica-de-privacidad">{getString('PRIVACY')}</Link>
            </li>
            <li className={styles['footer-nav-link']}>
                <Link href="/configuracion-de-cookies">{getString('COOKIES')}</Link>
            </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;