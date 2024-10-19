import React from 'react'
import Image from 'next/image'
import styles from './Augmentation.module.css'

function Augmentation() {
  return (
    <div className={styles.breastContainer}>
      {/* Секція титульна */}
      <h1>Збільшувальна пластика молочних залоз - Augmentation</h1>
      <section className={styles.augmrntitle}>
        <div className={styles.augmrntInfo}>
          <p>
            Операція по збільшенню грудей. підходить жінкам, які мають помітні
            вікові зміни молочних залоз, або ж володіють маленьким або великим
            об’ємом грудей. Збільшуюча маммопластика рекомендована жінкам з
            вродженим недорозвиненням грудей, а також в тих випадках, коли
            молочні залози зазнали змін в результаті великої втрати ваги.
            Повернути красиву форму грудей можливо після пологів та грудного
            вигодовування.
          </p>
        </div>
        <div className={styles.augmentImage}>
          <Image
            src="/Augmentation.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={700}
            height={700}
            className={styles.doctorImage}
          />
        </div>
      </section>

      {/* Секція Консультація */}
      <h2 className={styles.consultationTitle}>
        Консультація по збільшенню грудей
      </h2>
      <section className={styles.augmentConsultation}>
        <div className={styles.augmentInfo}>
          <div className={styles.augmentImage}>
            <Image
              src="/2consult.png" // Шлях до зображення з папки public
              alt="Doctor"
              width={500} // Розмір зображення
              height={500}
              className={styles.augmentImage}
            />
          </div>
          <div className={styles.augmentList}>
            <h3>Первинна зустріч</h3>
            <ul>
              <li>
                Консультація хірурга: огляд, анамнез, підбір імплантів,
                пояснення процедури.
              </li>
              <li>Проведення лабораторних аналізів та додаткових обстежень.</li>
              <li>Консультації інших фахівців — терапевта, анестезіолога.</li>
            </ul>

            <h3>Покази до операції збільшувальної пластики молочної залози</h3>
            <ul>
              <li>незадоволеності об’ємом і формою бюста;</li>

              <li>
                Значне погіршення форми грудей у період після пологів та
                лактації, при різкому зниженні ваги, при травмах.
              </li>
              <li>
                тубулярний бюст — характеризується нетиповою формою, що нагадує
                тубу
              </li>
              <li>
                асиметрія молочних залоз — це стан, коли одна з молочних залоз
                значно більша або менша за іншу;
              </li>
              <li>
                гіпоплазія молочної залози (маленькі груди) - недостатній
                розвиток бюста, що не відповідає загальним тілесним пропорціям;
              </li>
              <li>
                синдром Полланда — генетичне захворювання, що призводить до
                недорозвинення м'язів і кісток, включаючи молочні залози;
              </li>
              <li>
                післялактаціонна інволюція молочних залоз – атрофія, що
                відбувається після періоду годування немовля;
              </li>
              <li>Опущення грудей, що стається з віком.</li>
              <li>Втягнення, асиметричне збільшення сосків.</li>
              <li>Патологічні інволютивні зміни.</li>
              <li>Мастектомія.</li>
            </ul>

            <h3>Протипоказами до проведення цієї операції є:</h3>
            <ul>
              <li>Захворювання крові.</li>
              <li>Вік менше вісімнадцяти років.</li>
              <li>Поточна вагітність.</li>
              <li>Проблеми зі згортанням крові – гемофілія.</li>
              <li>Неконтрольований цукровий діабет.</li>
              <li>Загострення хронічних захворювань та їх декомпенсація.</li>
              <li>Гострі вірусні та бактеріальні інфекції.</li>
              <li>Гнійничкові захворювання шкіри.</li>
              <li>Невиліковні онкологічні захворювання.</li>
              <li>Психічні розлади.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Підготовка до операції */}
      <h2 className={styles.preparationTitle}>Підготовка до операції</h2>
      <section className={styles.augmentPreparation}>
        <div className={styles.preparationInfo}>
          <div className={styles.preparationList}>
            <h3>Здайте аналізи та пройдіть медичне обстеження</h3>
            <ul>
              <li>- загальний морфологічний аналіз крові</li>
              <li>- загальний аналіз сечі.</li>
              <li>- коагулограма.</li>
              <li>- цукор крові.</li>
              <li>- білірубін, АЛТ, АСТ.</li>
              <li>- сечовина, креатинін.</li>
              <li>- група крові та RH-фактор.</li>
              <li>- гепатит В, C, ВІЛ та RW.</li>
              <li>- УЗД молочних залоз.</li>
              <li>- R-графія ОГК.</li>
              <li>- ЕКГ.</li>
            </ul>

            <h3>Консультації лікарів:</h3>
            <ul>
              <li>Консультація терапевта.</li>
              <li>Консультація мамолога - при потребі.</li>
              <li>Консультація анестезіолога.</li>
            </ul>
          </div>
          <div className={styles.preparationImage}>
            <Image
              src="/consulation.png" // Шлях до зображення з папки public
              alt="Doctor"
              width={500}
              height={500}
              className={styles.preparationImage}
            />
          </div>
        </div>
      </section>

      {/* Процес операції */}
      <h2 className={styles.operationTitle}>Процес операції</h2>
      <section className={styles.operationSection}>
        <div className={styles.operationInfo}>
          <div className={styles.operationImages}>
            <Image
              src="/surgery.jpg" // Шлях до зображення з папки public
              alt="Doctor"
              width={300} // Зменшив розмір
              height={300}
              className={styles.operationImage}
            />
            <Image
              src="/surgeriImage1.png" // Шлях до зображення з папки public
              alt="Doctor"
              width={300}
              height={300}
              className={styles.operationImage}
            />
            <Image
              src="/surgeriImage2.jpg" // Шлях до зображення з папки public
              alt="Doctor"
              width={300}
              height={300}
              className={styles.operationImage}
            />
          </div>

          <div className={styles.operationMethod}>
            <p>Операція триває 2 - 2.5 години під епідуральною анестезією.</p>
            <h4>Методи проведення операції:</h4>

            <h3>Аксілярний (пахвовий)</h3>
            <p>
              Доступ до грудей здійснюється через надріз у пахвових западинах,
              тканини молочних залоз за такого методу операції не зачіпаються.
            </p>

            <h3>Параареолярний</h3>
            <p>
              Доступ до грудей через ареоли сосків, при цьому косметичний
              післяопераційний рубець залишається практично непомітним, часто
              такий метод застосовується в поєднанні з круговою підтяжкою
              грудей.
            </p>

            <h3>Субмаммарний</h3>
            <p>
              Найбезпечніший метод, доступ до тканин здійснюється через розріз
              під грудьми в природній складці.
            </p>

            <h4>Методи проведення операції:</h4>
            <h3>Під молочну залозу</h3>
            <p>
              Використовується вкрай рідко, встановлення імплантату можливе
              тільки за наявності достатнього обсягу м’яких тканин і малого
              розміру грудей.
            </p>

            <h3>Під грудний м’яз у двох площинах.</h3>
            <p>
              Верхня частина імплантатів опиняється під грудним м’язом, а нижня
              — під залозистою тканиною, що забезпечує надійний захист від
              промацування і зміщення.
            </p>
          </div>
        </div>
      </section>

      {/* Реабілітація після операції */}

      <h2 className={styles.rehabilTitle}>Реабілітація після операції</h2>
      <section className={styles.augmentRehabilitation}>
        <div className={styles.rehabilInfo}>
          <div className={styles.rehabilList}>
            <h3>Після збільшення грудей ми рекомендуємо:</h3>
            <ul>
              <li>- провести перші 1-2 доби після операції в стаціонарі.</li>
              <li>
                - використовувати анальгетики при виникненні больових відчуттів;
              </li>
              <li>
                - здійснювати особливий догляд за швами до моменту їх повного
                зняття;
              </li>
              <li>
                - під час сну лежати тільки на спині протягом двох тижнів з
                моменту проведення операції;
              </li>
              <li>
                - утримання від куріння та алкоголю. Нікотин звужує кровоносні
                судини, що може погіршити кровообіг та уповільнити загоєння
                тканин. Алкоголь може послабити імунну систему та посилити
                запальні процеси;
              </li>
              <li>
                - використовувати компресійну білизну в перший місяць після
                корекції грудей;
              </li>
              <li>
                - відмовитися від занять спортом на 1-1,5 міс. після операції;
              </li>
              <li>- не приймати ванну протягом 1 міс., лише душ;</li>
              <li>
                - виключити прийом теплових процедур і вплив ультрафіолетового
                випромінювання протягом двох місяців.
              </li>
            </ul>
          </div>
          <div className={styles.rehabilImage}>
            <Image
              src="/reabilitacion.jpg" // Шлях до зображення з папки public
              alt="Doctor"
              width={500}
              height={500}
              className={styles.rehabilImage}
            />
          </div>
        </div>
      </section>

      {/* Результат операції */}
      <h2 className={styles.resultsTitle}>Результати операції</h2>
      <section className={styles.augmentResults}>
        <div className={styles.resultsImage}>
          <Image
            src="/results.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={500}
            height={500}
            className={styles.resultsImage}
          />
        </div>
        <div className={styles.resultsInfo}>
          <p>
            Мамопластика – це можливість для жінок назавжди позбутися
            комплексів. Після пластики грудей пацієнтка набуває психологічний
            комфорт та впевненість у сексуальній привабливості. Пластична
            операція грудей дозволяє пацієнтці навіть після хірургічного
            лікування онкології відчути себе жінкою.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Augmentation