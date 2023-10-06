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
        
      </div>
      <h1>Regalos que le encantarian a la Quinceañera </h1>
      <div className={styles.grid}>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
          <h2>
            Efectivo <span></span>
          </h2>
          <p>No se aceptan Billetes de 20, 50 o 100 💵.</p>
        </a>

        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/baseball-cap.png" alt="baseball-cap"/>
          <h2>
            Gorras Originales  <span></span>
          </h2>
          <p>No se acepta mercancia del tianguis&nbsp;💵!</p>
        </a>

        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/jewelry.png" alt="jewelry"/>
          <h2>
            Joyas <span></span>
          </h2>
          <p>Son Bonitas</p>
        </a>

        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/trumpet.png" alt="trumpet"/>
          <h2>
            Banda <span></span>
          </h2>
          <p>
            Puedes llegar con banda o mariachi 🎺.
          </p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/gift.png" alt="gift"/>
          <h2>
            Regalos <span></span>
          </h2>
          <p>Regalos Grandes y Bonitos 👌🎁</p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/paint-palette.png" alt="paint-palette"/>
          <h2>
            Maquillaje <span></span>
          </h2>
          <p>La Festejada no tomara a mal tu regalo 😊💕</p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/teddy-bear.png" alt="teddy-bear"/>
          <h2>
            Peluches <span></span>
          </h2>
          <p>Grandes y Bonitos.</p>
        </a>
        <a
          className={styles.card}
          rel="noopener noreferrer"
        >
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/tv.png" alt="tv"/>
          <h2>
            Electronica <span></span>
          </h2>
          <p>No le hacemos feo a pantallas y bocinas Bluetooth</p>
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
