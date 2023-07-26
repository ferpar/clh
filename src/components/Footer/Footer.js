import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles['site-footer']}>
      <nav>
        <ul className={styles['footer-nav-links']}>
            <li className={styles['footer-nav-link']}>
                <a  href="/aviso-legal">Aviso Legal</a>
            </li>
            <li className={styles['footer-nav-link']}>
                <a href="/politica-de-privacidad">Política de Privacidad</a>
            </li>
            <li className={styles['footer-nav-link']}>
                <a href="/configuracion-de-cookies">Configuración de Cookies</a>
            </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;