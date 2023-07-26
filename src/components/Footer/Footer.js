import styles from './Footer.module.css';
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles['site-footer']}>
      <nav>
        <ul className={styles['footer-nav-links']}>
            <li className={styles['footer-nav-link']}>
                <Link  href="/aviso-legal">Aviso Legal</Link>
            </li>
            <li className={styles['footer-nav-link']}>
                <Link href="/politica-de-privacidad">Política de Privacidad</Link>
            </li>
            <li className={styles['footer-nav-link']}>
                <Link href="/configuracion-de-cookies">Configuración de Cookies</Link>
            </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;