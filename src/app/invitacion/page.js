import Image from 'next/image'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Soy &nbsp;
          <code className={styles.code}>🥰</code>
        </p>
        <div>
          <a
            href="./"
            rel="noopener noreferrer"
          >
            Volver al {''}
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
          src="/maria.jpeg"
          alt="Next.js Logo"
          width={280}
          height={280}
          priority
        />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Name.svg"
          alt="Next.js Logo"
          width={1800}
          height={280}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/dashboard"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Invitacion <span>-&gt;</span>
          </h2>
          <p>Invitacion Principal.</p>
        </a>

        <a
          href="/dashboard"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Ubicacion <span>-&gt;</span>
          </h2>
          <p>Mapas y Ubicacion de la Party&nbsp;Pary 🎂🥳!</p>
        </a>

        <a
          href="/padrinos"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Padrinos <span>-&gt;</span>
          </h2>
          <p>Informacion Sobre mis Padrinos.</p>
        </a>

        <a
          href="/dashboard"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Mesa de Regalos <span>-&gt;</span>
          </h2>
          <p>
            Posibles regalos que le gustarian a la Festejada.
          </p>
        </a>
      </div>
    </main>
  )
}
