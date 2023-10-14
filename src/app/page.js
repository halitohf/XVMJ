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
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/XV_.svg"
          alt="Logo XV"
          width={280}
          height={280}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/Invitacion"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Invitacion <span>-&gt;</span>
          </h2>
          <p>Fecha y Hora del Evento.</p>
        </a>

        <a
          href="/Mapas"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Ubicacion <span>-&gt;</span>
          </h2>
          <p>Mapas y Ubicacion de la Party&nbsp;Party 🎂🥳!</p>
        </a>

        <a
          href="/Padrinos"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Padrinos <span>-&gt;</span>
          </h2>
          <p>Informacion Sobre mis Padrinos.</p>
        </a>

        <a
          href="/MesaRegalos"
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
