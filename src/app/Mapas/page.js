import Image from 'next/image'
import styles from '../page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Te muestro como llegar a la Misa ⛪ y a la Fiesta 🥳
          <code className={styles.code}>🥰</code>
        </p>
        
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Mapas1.svg"
          alt="Next.js Logo"
          width={280}
          height={280}
          priority
        />
      </div>
      <h2>Parroquia de San Vicente Diácono y Mártir</h2>
      <p>Inicio de la misa a las 5:00pm</p>
      <div className={styles.description}>
      </div>
      <p>Mejoramiento del Ambiente s/n, Cabecera Municipal, 56370 Chicoloapan de Juárez, Méx.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9350181468!2d-98.9023564917779!3d19.415213448601175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e114a32542cf%3A0x4cf29313fa52ac9c!2sParroquia%20de%20San%20Vicente%20Di%C3%A1cono%20y%20M%C3%A1rtir!5e0!3m2!1ses-419!2smx!4v1695529277895!5m2!1ses-419!2smx" width="400" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className={styles.center}>
      </div>
      <h2>Fiesta</h2>
      <p>Despues de la Misa, los esperamos en: </p>
      <div className={styles.description}>
      </div>
      <p>Cd Camino Al Monte 27, El Arenal 1, 56370 San Vicente Chicoloapan, Méx.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9350181468!2d-98.9023564917779!3d19.415213448601175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e114a32542cf%3A0x4cf29313fa52ac9c!2sParroquia%20de%20San%20Vicente%20Di%C3%A1cono%20y%20M%C3%A1rtir!5e0!3m2!1ses-419!2smx!4v1695529277895!5m2!1ses-419!2smx" width="400" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className={styles.center}>
      </div>
        <div className={styles.card}>
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
