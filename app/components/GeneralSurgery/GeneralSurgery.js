import Link from 'next/link'
import Image from 'next/image'

import styles from './GeneralSurgery.module.css'

const GeneralSurgery = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.image}>
        <Image
          src="/Tors.jpg" // Зображення для грижі (з папки public)
          alt="Breast Surgery"
          width={1350}
          height={1350}
          className={styles.bodyImage}
        />
      </div>
      <div className={styles.info}>
        <h2>Загальна хірургія</h2>
        <p>
          <strong>Загальна хірургія - є мати всіх хірургій.</strong>
          <br />
          Багато напрямків відділилося від неї і стали більш профільними. Однак
          при освоєнні цих напрямків <u>дорога майбутнього хірурга </u> любої
          спеціалізації (судинний, кардіо, пластичний… хірург) - лежить через
          практичні навички по загальні хірургії. Є також операції, які неможна
          віднести до пластичної хірургії (грижесічення …) хоча по суті
          виконується пластика - формування розрушеної черевної стінки.
        </p>
        <ul>
          <li>
            <Link href="/operation/herniotomy">Операції при грижах</Link>
          </li>

          <li>
            <Link href="/operation/liposuction">Ліпосакція</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GeneralSurgery
