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
      </div>

      <div className={styles.logo}><p>&nbsp;</p>
      <Image
          src="/111.svg"
          alt="Nombre"
          width={550}
          height={100}
          priority
        />
        </div>
      <div><p>&nbsp;</p></div>
      <div><h1>25 DE NOVIEMBRE DEL 2023</h1></div>
      <div><p>&nbsp;</p></div>
      <div><p>&nbsp;</p></div>
      <div><h1>La Misa Iniciaria</h1></div>
      <div><p>&nbsp;</p></div>
      <div><h1>HRS: 5:00PM</h1></div>
      <div><p>&nbsp;</p></div>
      <div><p>&nbsp;</p></div>
      
      <div className={styles.grid}>
        <a
          href="/Invitacion"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Invitacion <span>-&gt;</span>
          </h2>
          <p>Invitacion Principal.</p>
        </a>

        <a
          href="/Mapas"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Ubicacion <span>-&gt;</span>
          </h2>
          <p>Mapas y Ubicacion de la Party&nbsp;Pary 🎂🥳!</p>
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
