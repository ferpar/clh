import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'Inicio | Centro León Hebreo',
  description: 'Bienvenid@ a la web del Centro León Hebreo',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Content</p>
    </main>
  )
}
