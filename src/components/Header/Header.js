import styles from './header.module.css'
function Header() {
  return (
    <header className={styles['site-header']}>
      <a>
        <h1>CLH</h1>
      </a>
      <nav>
        <ul className={styles['header-nav-links']}>
            <li className={styles['header-nav-link']}>
                <a  href="/">Inicio</a>
            </li>
            <li className={styles['header-nav-link']}>
                <a href="/cursos">Cursos</a>
            </li>
            <li className={styles['header-nav-link']}>
                <a href="/equipo">Equipo</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
