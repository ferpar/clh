import Image from 'next/image'
import styles from './page.module.css'
import {getString} from '../helpers/i18n'

export const metadata = {
  title: 'Inicio | Centro León Hebreo',
  description: 'Bienvenid@ a la web del Centro León Hebreo',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles['hero']}>
        <div>
          <h3>{getString('TITLE')}</h3> 
          <p>{getString('SUBTITLE')}</p>
          <p>{getString('DESCRIPTION')}</p>
        </div>
      </section>
      <section className={styles['about']}>
        <div>
          <h3>{getString('TITLE')}</h3> 
          <p>{getString('ABOUT')}</p>
        </div>
      </section>
      <section className={styles['highlighted']}>
        <h3>{getString('LIGHTHOUSE')}</h3> 
        <p>{getString('LIGHTHOUSE_DESCRIPTION')}</p>
      </section>
    </main>
  )
}
