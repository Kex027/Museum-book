import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.content}>
          <img src="/museum_title.png" alt="Museum Title" className={styles.museumTitle} />
          <div className={styles.book}>
            <img src="/book.png" alt="Book" />
          </div>
        </div>
      </div>
    </div>
  )
}
