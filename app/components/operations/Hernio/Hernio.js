import React from 'react'
import Image from 'next/image'
import styles from './Hernio.module.css'

const Hernio = () => {
  return (
    <div className={styles.hernio}>
      <h1>Операція для ліквідації гриж - Hernioplasty</h1>
      <div>
        <section className={styles.hernioPlast}>
          <div className={styles.herniolInfo}>
            <div className={styles.hernioList}>
              <p>
                <strong>Герніопластика</strong> -{' '}
                <u>
                  це єдиний ефективний способом лікування грижі з застосуванням
                  оперативного втручання.
                </u>{' '}
                <br />
                Враховуючи вид грижі та стан пацієнта, лікар обирає оптимальний
                спосіб оперативного лікування гриж живота. Ми проводимо операції
                на сучасному обладнанні, з використанням новітніх технологій та
                високоякісних аллогенних матеріалів. Стінки черевної порожнини,
                де розміщуються черевні органи, утворені м'язево-апоневротичними
                шаром, який є досить щільний, однак має також і слабкі місця.
                Через розширення цих слабких місць (пупкове кільце, пахові
                ділянки та розтягнутої білої лінії живота), а також через старі
                післяопераційні рубці і випинаються внутрішні органи при
                підвищенні внутрішньочегового тиску. Якщо орган, (частіше всього
                це кишкивник чи чепець) який випинається - защемиться, то тоді
                виникає дуже небезпечне для життя ускладнення. Це ускладнення
                може привести до смертельної для хворого ситуації. Єдиною
                допомогою хворому в цій ситуації є невідкладне оперативне
                лікування.
              </p>
            </div>
            <div className={styles.hernioImage}>
              <Image
                src="/gernio.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={500}
                height={500}
                // className={styles.hernioImage}
              />
            </div>
          </div>
        </section>

        {/* Секція Консультація */}

        <h2 className={styles.consultationTitle}>
          Консультація пацієнта з грижою
        </h2>
        <section className={styles.hernioConsultation}>
          <div className={styles.hernioInfo}>
            <div className={styles.hernioImage}>
              <Image
                src="/fieleGernio.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600} // Розмір зображення
                height={600}
                // className={styles.abdominoImage}
              />
              <Image
                src="/gernioplastika2.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={600} // Розмір зображення
                height={600}
                // className={styles.hernioImage}
              />
            </div>
            <div className={styles.hernioList}>
              <h3>Первинна зустріч</h3>
              <ul>
                <li>Огляд хірургом з уточненням діагнозу та стану хворого.</li>
                <li>
                  Планування операції з обговорення методів оперативного
                  лікування, очікуваних результатів операції та ризики можливих
                  ускладнень.
                </li>
                <li>Проведення необхідних аналізів та додаткових обстежень.</li>
                <li>Консультації інших фахівців — терапевта, анестезіолога.</li>
              </ul>

              <h3>Покази до планової операції при грижі - герніотомія</h3>
              <ul>
                <li>
                  наявність грижі передньої черевної стінки є абсолютним показом
                  до оперативного лікування в плановому порядку.
                </li>

                <li>
                  Защемлена грижа є абсолютним показами до невідкладної операції
                </li>
                <li>
                  Відмова хворому в плановому оперативному лікуванні грижі може
                  бути тільки при наявності важкої супутньої патології, яка
                  ставить ризик оперативного втручання вище чим самий ризик
                  наявності грижі. В таких випадках хворому пропонують носіння
                  бандажа.
                </li>
              </ul>

              <h3>
                Протипоказами до проведення планової операції - герніотомії є:
              </h3>
              <ul>
                <li>Захворювання крові.</li>

                <li>Поточна вагітність.</li>
                <li>
                  Проблеми зі згортанням крові – гемофілія.(операція виконується
                  під прикриттям необхідних антигемофільних припаратів.)
                </li>
                <li>
                  Неконтрольований цукровий діабет. (операція виконується після
                  стабілізації цукру під наглядом ендокринолога)
                </li>
                <li>
                  Загострення хронічних захворювань та їх декомпенсація.
                  Операція проводиться після лікування захворюваннь, встадії
                  компенсації{' '}
                </li>
                <li>Гострі вірусні та бактеріальні інфекції.</li>
                <li>Гнійничкові захворювання шкіри.</li>
                <li>Психічні розлади.</li>
                <li>Будь які гострі захворювання.</li>
              </ul>
              <h3>
                Протипоказами до проведення ургентного оперативного лікуванн -
                герніотомія є:
              </h3>
              <p>Тільки агонуючий стан хворого.</p>
            </div>
          </div>
        </section>

        {/* Підготовка до операції */}
        <h2 className={styles.preparationTitle}>Підготовка до операції</h2>
        <section className={styles.hernioPreparation}>
          <div className={styles.hernioInfo}>
            <div className={styles.hernioList}>
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
            <div className={styles.hernioImage}>
              <Image
                src="/lab.png" // Шлях до зображення з папки public
                alt="Doctor"
                width={500}
                height={500}
                // className={styles.hernioImage}
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
                src="/gernioSurgery.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={300}
                height={300}
                className={styles.operationImage}
              />
              <Image
                src="/abdomiSurg.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={200}
                height={200}
                className={styles.operationImage}
              />
              <Image
                src="/my abdomin2.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={300}
                height={300}
                className={styles.operationImage}
              />
            </div>

            <div className={styles.operationMethod}>
              <p>
                Операція триває 1 - 2.5 години. Анестезія може бути різна в
                залежності від митодики оперативного лікування, це загальна,
                регіонарна та місцева.{' '}
              </p>

              <h4>
                Герніопластика (операція для ліквідації гриж) має кілька видів:
              </h4>

              <h3>Традиційна (відкрита) герніпластика . </h3>
              <p>
                Виконується через розріз над грижовим дефектом. Відкрита
                герніопластика забезпечує більш вільний доступ до грижі і
                грижових воріт. Анестезія використовується місцева або
                спинномозкова, також втручання може виконуватися під загальним
                наркозом. Даний метод використовується для лікування гриж
                будь-якого розміру.
              </p>

              <strong>Різновиди відкритої герніопластики</strong>

              <h4>Натяжна герніопластика</h4>
              <p>
                Виконується з пластикою місцевими тканинами. Для нас цей метод
                історичний. В нашій клініці він практично не використовується.{' '}
              </p>

              <h4>Ненатяжна герніопластика</h4>
              <p>
                {' '}
                реконструктивні втручання з установкою сучасних штучних
                сітчастих матеріалів. Це дає можливісь виконувати ефективне
                оперативне лікування гриж будь яких розмірів і стану країв
                грижових воріт.
              </p>

              <h3>Лапароскопічна герніопластика </h3>
              <p>
                Виконується через 3-4 невеликі розрізи в черевній стінці
                (довжиною від 5 до 10 мм), лапароскопічними інструментами під
                контролем відеокамери. Метод не підходить для лікування гриж
                великого розміру (з грижовими воротами більше 10 см) і
                пацієнтам, яким протипоказаний загальний (ендотрахеальний)
                наркоз.
              </p>
            </div>
          </div>
        </section>

        {/* Реабілітація після операції */}

        <h2 className={styles.rehabilTitle}>Реабілітація після операції</h2>
        <section className={styles.hernioRehabilitation}>
          <div className={styles.rehabilInfo}>
            <div className={styles.rehabilList}>
              <strong>
                Герніопластика - досить серйозне оператвине втручання і потрібно
                додержуватись тих рекомендацій і насторог які надає лікуючий
                лікар.
              </strong>

              <h3>Після операції ми рекомендуємо:</h3>
              <ul>
                <li>
                  - Залежно від того, яку герніопластику було виконано,
                  відрізняється і період реабілітації після операції.
                  Лапароскопічна герніопластика є оперативне втручання з
                  невеликою травматизацією, тому пацієнт у стаціонарі має
                  провести лише два дні. Традиційна герніопластика вимагатиме
                  більш тривалішого перебування в клініці: в середньому до 5
                  днів..
                </li>
                <li>
                  - Для зняття болю перші кілька днів призначаються
                  знеболювальні припарати. Призначаються і інші медикаментозні
                  припарати для запобігання розвитку ускладнень таких як ,
                  тромбоутворень, інфікувань і розвитку черезмірної запальної
                  реакції на травму.
                </li>
                <li>
                  - Бажанно реннє вставання з ліжка для запобігання тромботичних
                  ускладнень;
                </li>
                <li>
                  - Першу добу можна лише пити воду, їсти не дозволяється.
                </li>
                <li>
                  - На другу добу дозволяється прийом їжі в невеликих
                  кількостях.
                </li>

                <li>
                  - після операцій при венральних грижах рекомендовано носити
                  післяопераційний бандаж протягом 1-2 місяців, після операцій з
                  приводу пахови гриж носіння бандажа не практикується.
                </li>

                <li> - не мочити шви до зняття їх;</li>

                <li>
                  - утримання від куріння та алкоголю. Нікотин звужує кровоносні
                  судини, що може погіршити кровообіг та уповільнити загоєння
                  тканин. Алкоголь може послабити імунну систему та посилити
                  запальні процеси;
                </li>
                <li>
                  - рекомендується уникати прямих сонячних променів та засмаги;
                </li>
                <li> - не приймати ванну протягом 1 міс., лише душ;</li>
                <li>
                  - не відвідувати сауну, басейн, солярій протягом 30 днів після
                  операції;
                </li>
                <li>
                  враховуючи те ,що сітка вростає в тканини на протязі від 45 до
                  60 діб обмежити фізичні навантаження до двух, трьох місяців в
                  залежності від виду абтомінопластики .
                </li>
                <li></li>
              </ul>
              <h3> Можливі ускладнення післяопераційні</h3>
              <p>
                Післяопераційні ускладнення виникаю{' '}
                <strong>
                  чаше при порушені виконання рекомендацій лікуючого лікаря.
                </strong>
              </p>

              <ul>
                <li>
                  - При ранніх фізичних навантаженнях можливий рух сітки
                  відносно навколишніх тканиі і порушенню її приростання.
                </li>
                <li>- Виникнення сером.</li>
                <li>- Затяжне загоєння післяопераційної рани.</li>
                <li>- оніміння шкіри навколо п/операційного рубця.</li>
                <li>
                  - порушення формування рубця (келоїд рубця, гіпертрофічний або
                  атрофічний рубець)
                </li>
              </ul>
            </div>
            <div className={styles.rehabilImage}>
              <Image
                src="/abdomiSur1.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={500}
                height={500}
                className={styles.rehabilImage}
              />
              <Image
                src="/reabilstation.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={500}
                height={500}
                className={styles.rehabilImage}
              />
              <Image
                src="/reabilitation1.jpg" // Шлях до зображення з папки public
                alt="Doctor"
                width={500}
                height={500}
                className={styles.rehabilImage}
              />
            </div>
          </div>
        </section>

        {/* імпланти*/}

        <h2 className={styles.implantsTitle}>
          Аллотрансплантант при лікуванні гриж
        </h2>
        <section className={styles.implantsSection}>
          <div className={styles.implantsImage}>
            <Image
              src="/gridі.jpg" // Шлях до зображення з папки public
              alt="Doctor"
              width={600}
              height={400}
              // className={styles.resultsImage}
            />

            <Image
              src="/gryzha_14.jpg" // Шлях до зображення з папки public
              alt="Doctor"
              width={600}
              height={400}
              // className={styles.implantsImage}
            />
          </div>
          <div className={styles.implantsInfo}>
            <h3>
              Використання аллотрансплантантів вивело на новий рівень оперативне
              лікування гриж черевної стінки
            </h3>

            <p>
              Використання синтетичних імплантатів значно знизило відсоток
              рецидиву гриж, зробило період реабілітації більш комфортним для
              пацієнта і підвищило швидкість відновлення працездатності. Тому в
              більшості випадків (більш ніж в 90%) для пластики грижового
              дефекту черевної порожнини застосовуються штучні сітчасті
              матеріали. Сучасні грижові сітки (аллопротези) являють собою
              плетені сітчасті синтетичні пластини, якими з надлишком
              перекриваються грижові ворота. Це допомагає зміцнити і
              стабілізувати мязи і фасції черевної стінки, мінімізувати натяг і
              пошкодження тканин. Аллопротез кріпиться до мязів пацієнта за
              допомогою шовного матеріалу або спеціальних скоб (Тракерів).
              Потрібно зовсім небагато часу, щоб сітка проросла сполучною
              тканиною і стала міцним захистом, що перешкоджає повторному
              виникненню грижового дефекту. Сучасні ендопротези за своєю
              пластичністю і надійністю перевершують тканини людини, вони не
              викликають алергії, не відторгаються організмом і легко
              імплантуються. Вид і розмір сітчастого імплантату підбирається
              індивідуально для кожного пацієнта з урахуванням техніки
              проведення планової операції, обсягу грижового дефекту і
              вираженості атрофічних змін тканин, що утворюють грижові ворота.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hernio
