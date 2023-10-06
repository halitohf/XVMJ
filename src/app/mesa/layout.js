import Image from 'next/image'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Mesa de Regalos&nbsp;
          <code className={styles.code}>🥰</code>
        </p>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            Volver al {' '}
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

      <div className={styles.grid}>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
          <h2>
            Efectivo <span>-&gt;</span>
          </h2>
          <p>No se aceptan Billetes de 20, 50 o 100 💵.</p>
        </a>

        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/baseball-cap.png" alt="baseball-cap"/>
          <h2>
            Gorras Originales  <span>-&gt;</span>
          </h2>
          <p>No se acepta mercancia del tianguis&nbsp;💵!</p>
        </a>

        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
          <h2>
            Regalo 3# <span>-&gt;</span>
          </h2>
          <p>Informacion Sobre mis Padrinos.</p>
        </a>

        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
          <h2>
            Regalo 4 # <span>-&gt;</span>
          </h2>
          <p>
            Posibles regalos que le gustarian a la Festejada.
          </p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
          <h2>
            Regalo 1 # <span>-&gt;</span>
          </h2>
          <p>Fecha y Hora del Evento.</p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
          <h2>
            Regalo 2 # <span>-&gt;</span>
          </h2>
          <p>Fecha y Hora del Evento.</p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Regalo 3 # <span>-&gt;</span>
          </h2>
          <p>Fecha y Hora del Evento.</p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Regalo 1 # <span>-&gt;</span>
          </h2>
          <p>Fecha y Hora del Evento.</p>
        </a>
      </div>
    </main>
  )
}