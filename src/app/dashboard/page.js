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
        <div>
          <a
            href="https://github.com/halitohf"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
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
          src="/Mapas1.svg"
          alt="Next.js Logo"
          width={280}
          height={280}
          priority
        />
      </div>

      <iframe className="maps"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.404325474127!2d-99.14937212404124!3d19.438126881842493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d5c3166767%3A0x60f5e1bbed779eb8!2sIglesia%20de%20San%20Hip%C3%B3lito%20y%20San%20Casiano!5e0!3m2!1ses-419!2smx!4v1695416769048!5m2!1ses-419!2smx" width="1000" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className={styles.grid}>
        <a
          href="https://"
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
          href="https://"
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
          href="https://"
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
          href="https://"
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
