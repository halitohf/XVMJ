import Image from 'next/image'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Mis padrinos son:&nbsp;
          <code className={styles.code}>🥰</code>
        </p>
        <div>
          <a
            href="./"
            rel="noopener noreferrer"
          >
            Volver a {' '}
            <Image
              src="/Inicio.svg"
              alt="Vercel Logo"
              className={styles.logo}
              width={100}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Padrinos.svg"
          alt="Next.js Logo"
          width={480}
          height={280}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Padrino <span>-&gt;</span>
          </h2>
          <p>&nbsp;👨</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Madrina <span>-&gt;</span>
          </h2>
          <p>&nbsp; 👩</p>
        </a>
      </div>
      <div>
        <a
          className={styles.card}
          href="/"
          rel="noopener noreferrer"
        >
          <h2>
            Volver al Inicio <span></span>
          </h2>
        </a>
        </div>
    </main>
  )
}
