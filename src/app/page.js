import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Es un placer para mi invitarte a mis XV&nbsp;
          <code className={styles.code}>🥰</code>
        </p>
        <div>
          <a
            href="https://github.com/halitohf"
            rel="noopener noreferrer"
          >
            Volver al {' '}
            <Image
              src="/JJZR.svg"
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
          src="/XV_.svg"
          alt="Next.js Logo"
          width={280}
          height={280}
          priority
        />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Maria.svg"
          alt="Next.js Logo"
          width={1400}
          height={280}
          priority
        />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/José.svg"
          alt="Next.js Logo"
          width={1400}
          height={280}
          priority
        />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Rosales.svg"
          alt="Next.js Logo"
          width={1400}
          height={280}
          priority
        />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Camacho.svg"
          alt="Next.js Logo"
          width={1400}
          height={280}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/invitacion"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Invitacion <span>-&gt;</span>
          </h2>
          <p>Fecha y Hora del Evento.</p>
        </a>

        <a
          href="/dashboard"
          className={styles.card}
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
          rel="noopener noreferrer"
        >
          <h2>
            Padrinos <span>-&gt;</span>
          </h2>
          <p>Informacion Sobre mis Padrinos.</p>
        </a>

        <a
          href="/mesa"
          className={styles.card}
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
