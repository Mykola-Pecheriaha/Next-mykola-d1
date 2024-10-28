'use client'
import React, { useState } from 'react'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [isEducationOpen, setIsEducationOpen] = useState(false)
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false)
  const [isPositionsOpen, setisPositionsOpen] = useState(false)
  const [openProfSkills, setOpenProfSkills] = useState(null)
  const [openSubProfSkills, setOpenSubProfSkills] = useState(null)

  // Одна функція для відкриття розділів освіти, сертифікатів і посад
  const toggleSection = (section) => {
    if (section === 'education') {
      setIsEducationOpen(!isEducationOpen)
    } else if (section === 'certificates') {
      setIsCertificatesOpen(!isCertificatesOpen)
    } else if (section === 'positions') {
      setisPositionsOpen(!isPositionsOpen)
    } else {
      // Відкриття розділів професійних навичок
      setOpenProfSkills(openProfSkills === section ? null : section)
      setOpenSubProfSkills(null) // Закриває підменю при відкритті нового розділу
    }
  }

  // Функція для відкриття підрозділів професійних навичок
  const toggleSubSection = (subSection) => {
    setOpenSubProfSkills(openSubProfSkills === subSection ? null : subSection)
  }

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioTitle}>
        <div className={styles.portfolioText}>
          <h3 className={styles.portfolioName}>Печеряга Микола Миколайович</h3>
          <div className={styles.portfolioBirth}>
            Дата народження: 18.02.1968
          </div>
          <div className={styles.portfolioAddress}>Україна, м. Чернівці</div>
          <div className={styles.portfolioMobile}>Телефон: +380507575411</div>
          <div className={styles.portfolioEmail}>
            Email: pecheryag@gmail.com
          </div>
          <div className={styles.citizenship}>Сімейний стан: Одружений</div>
          <div className={styles.children}>
            <h4>Діти:</h4>
            <p>Старший син - Дмитро</p>
            <p>Молодший син - Артем</p>
          </div>
          <div className={styles.desiredPosition}>
            Бажана посада: Лікар-хірург
          </div>
        </div>
        <div className={styles.portfolioImage}>
          <img src="/" alt="Doctor's Portrait" />
        </div>
      </div>

      <div className={styles.portfolioSection}>
        <h3 onClick={() => toggleSection('education')}>
          Освіта <span>{isEducationOpen ? '▲' : '▼'}</span>
        </h3>
        {isEducationOpen && (
          <ul>
            <li>Середня освіта: - середня школа</li>
            <li>Вища освіта: - Одеський державний медичний університет</li>
            <li>
              Інтернатура: - Буковинська державна медична академія, Хірургія
            </li>
            <li>
              Клінічна ординатура - Буковинська державна медична академія,
              Хірургія
            </li>
          </ul>
        )}
      </div>

      <div className={styles.portfolioSection}>
        <h3 onClick={() => toggleSection('certificates')}>
          Сертифікати <span>{isCertificatesOpen ? '▲' : '▼'}</span>
        </h3>
        {isCertificatesOpen && (
          <ul>
            <li>Загальна хірургія</li>
            <li>Лапароскопічна хірургія</li>
            <li>Пластична, естетична та реконструктивна хірургія</li>
            <li>Онкологія</li>
            <li>Бариатрична хірургія</li>
          </ul>
        )}
      </div>

      <div className={styles.portfolioSection}>
        <h3 onClick={() => toggleSection('positions')}>
          Посади за час роботи <span>{isPositionsOpen ? '▲' : '▼'}</span>
        </h3>
        {isPositionsOpen && (
          <ul>
            <li>Лікар - хірург Торакального відділення ОКЛ</li>
            <li>
              Лікар-хірург хірургічного відділення. Чернівецький військовий
              Базовий госпіталь
            </li>
            <li>
              Лікар хірург хірургічного відділення. Лікар Онколог. Вузлової
              клінічної лікарні ст.Чернівці
            </li>
            <li>
              Завідувач відділенням хірургії. Районний хірург. Снятинська ЦРЛ
              Івано-Франківська обл.
            </li>
            <li>
              Завідувач міським центром хірургії. Міська лікарня №1 м.Чернівці
            </li>
            <li>Завідувач відділенням хірургії. ЦМКЛ м. Чернівці</li>
          </ul>
        )}
      </div>

      <h2>Професійні навички. Список операцій які я виконую</h2>

      <div className={styles.skillsContainer}>
        <h3 onClick={() => toggleSection('hernias')}>
          Операції при грижах {openProfSkills === 'hernias' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'hernias' && (
          <ul className={openProfSkills === 'hernias' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('herniaDetails')}>
                Види операцій при грижах
                {openSubProfSkills === 'herniaDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'herniaDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'herniaDetails' ? styles.open : ''
                  }
                >
                  <li>
                    З використанням сітчастих імплантів при пахових грижах
                  </li>
                  <li>Операції без сітчастих імплантів для вентральних гриж</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('hstomach')}>
          Операції на шлунку {openProfSkills === 'hstomach' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'hstomach' && (
          <ul className={openProfSkills === 'hstomach' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('stomachDetails')}>
                Види операцій при грижах
                {openSubProfSkills === 'stomachDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'stomachDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'stomachDetails' ? styles.open : ''
                  }
                >
                  <li>- Резекції шлунку</li>
                  <li>- Гастротомії</li>
                  <li>- Гастростомії</li>
                  <li>- Зашивання перфоративних виразок</li>
                  <li>- Ваготомії</li>
                  <li>- Рукавна резекція шлунку при ожирінні</li>
                  <li>
                    - Фундоплікації при грижах стравохідного отвору діафрагми
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('duodenum')}>
          Операції на ДПК {openProfSkills === 'duodenum' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'duodenum' && (
          <ul className={openProfSkills === 'duodenum' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('duodenumDetails')}>
                Види операцій на ДПК
                {openSubProfSkills === 'duodenumDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'duodenumDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'duodenumDetails' ? styles.open : ''
                  }
                >
                  <li>
                    - Зашивання з дренуючими операціями при перфоративні
                    виразці.
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('bowel')}>
          Операції на кишці {openProfSkills === 'bowel' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'bowel' && (
          <ul className={openProfSkills === 'bowel' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('bowelDetails')}>
                Види Операції на кишці
                {openSubProfSkills === 'bowelDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'bowelDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'bowelDetails' ? styles.open : ''
                  }
                >
                  <li>- Роз’єднання злук</li>
                  <li>- Резекція кишки з накладанням різних анастомозів</li>
                  <li>
                    - Геміколектомії правобічна, лівобічна (з анастомозом та
                    операцією Гартмана)
                  </li>
                  <li>- Накладання кишкових стом</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('liver')}>
          Операції на печінці {openProfSkills === 'liver' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'liver' && (
          <ul className={openProfSkills === 'liver' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('liverDetails')}>
                Види Операції на печінці
                {openSubProfSkills === 'liverDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'liverDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'liverDetails' ? styles.open : ''
                  }
                >
                  <li>Видалення кіст печінки</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('gallbladder')}>
          Операції на жовчеві системі{' '}
          {openProfSkills === 'gallbladder' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'gallbladder' && (
          <ul className={openProfSkills === 'gallbladder' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('gallbladderDetails')}>
                Операції на жовчеві системі
                {openSubProfSkills === 'gallbladderDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'gallbladderDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'gallbladderDetails'
                      ? styles.open
                      : ''
                  }
                >
                  <li>-Холецистектомія</li>
                  <li>-Холецистостомія</li>
                  <li>-Холецистоєюностомія</li>
                  <li>-Холедохотомія та дренування холедоха</li>
                  <li>-Холедохостомія -дуодено, - єюно</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('abdominal')}>
          Інші операції на органах черевної порожнини{' '}
          {openProfSkills === 'abdominal' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'abdominal' && (
          <ul className={openProfSkills === 'abdominal' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('abdominalDetails')}>
                Інші операції на органах черевної порожнини
                {openSubProfSkills === 'abdominalDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'abdominalDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'abdominalDetails' ? styles.open : ''
                  }
                >
                  <li>-Спленектомія</li>
                  <li>-Апендектомія</li>
                  <li>
                    -Сиквестектомії і дренування при деструктивних панкреатитах
                  </li>
                  <li>-Видалення різних пухлин черевної порожнини</li>
                  <li>
                    -Дренування різних абсцесів скупчень рідин в черевні
                    порожнині
                  </li>
                  <li>-Видалення кіст яєчників</li>
                  <li>-Над піхвова ампутація матки</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('laparoscopi')}>
          Лапараскопічна хірургія Операції на жовчеві системі{' '}
          {openProfSkills === 'laparoscopi' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'laparoscopi' && (
          <ul className={openProfSkills === 'laparoscopi' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('laparoscopiDetails')}>
                Лапараскопічна хірургія Операції на жовчеві сlaparoscopi
                {openSubProfSkills === 'laparoscopiDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'laparoscopiDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'laparoscopiDetails'
                      ? styles.open
                      : ''
                  }
                >
                  <li>- Діагностична лапараскопія та торакоскопія</li>
                  <li>- Холецистектомія</li>
                  <li>- Дренування холедоха</li>
                  <li>- Зашивання перфоративної виразки шлунку</li>
                  <li>- Апендектомія</li>
                  <li>- Операція при варикоцеле</li>
                  <li>- Видалення кіст яєчника</li>
                  <li>- Перев’язування труб маточних</li>
                  <li>- Дрилінг при склерокистозі яєчників</li>
                  <li>
                    -Трансперітоніальні герніотомії з пластикою сітчастими
                    імплантами
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('vein')}>
          Операції на венах {openProfSkills === 'vein' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'vein' && (
          <ul className={openProfSkills === 'vein' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('veinDetails')}>
                Операції на венах
                {openSubProfSkills === 'veinDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'veinDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'veinDetails' ? styles.open : ''
                  }
                >
                  <li>-Видалення підшкірних варикознорозширених вен</li>
                  <li>
                    -Операції при венозних виразках гомілок з дермопластикою
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('genital')}>
          Oперація на статевих органах{openProfSkills === 'genital' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'genital' && (
          <ul className={openProfSkills === 'genital' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('genitalDetails')}>
                Oперація на статевих органах
                {openSubProfSkills === 'genitalDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'genitalDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'genitalDetails' ? styles.open : ''
                  }
                >
                  <li>Операції при водянках оболонок яєчка</li>
                  <li>Операції при фімозах</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('face')}>
          Омоложуючі операції на обличчі {openProfSkills === 'face' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'face' && (
          <ul className={openProfSkills === 'face' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('faceDetails')}>
                Омоложуючі операції на обличчі
                {openSubProfSkills === 'faceDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'faceDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'faceDetails' ? styles.open : ''
                  }
                >
                  <li>
                    {' '}
                    -Підтяжки обличчя (верхньо - середній СМАС, круговий)
                  </li>
                  <li> -Блефаропластика</li>
                  <li> -Пластика губ</li>
                  <li> -Рінопластика</li>
                  <li> -Оттопластика</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('mammary')}>
          Операції на молочних залозах{' '}
          {openProfSkills === 'mammary' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'mammary' && (
          <ul className={openProfSkills === 'mammary' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('mammaryDetails')}>
                Операції на молочних залозах
                {openSubProfSkills === 'mammaryDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'mammaryDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'mammaryDetails' ? styles.open : ''
                  }
                >
                  <li> -Збільшення молочних залоз за допомогою імплантів</li>
                  <li> -заміна імплантів молочних залозів</li>
                  <li> -видалення імплантів молочних залоз</li>
                  <li> -Усунення птозу молочних залоз</li>
                  <li> -Зменшення молочних залоз</li>
                  <li>-ТРАМ -лоскутне формування молочної залози</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('abdominals')}>
          Операції на передній черевній стінці{' '}
          {openProfSkills === 'abdominals' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'abdominals' && (
          <ul className={openProfSkills === 'abdominals' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('abdominalsDetails')}>
                Операції на передній черевній стінці
                {openSubProfSkills === 'abdominalsDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'abdominalsDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'abdominalsDetails' ? styles.open : ''
                  }
                >
                  <li>-Абдомінопластика (велика, мала)</li>
                  <li>
                    -Усунення діастазу прямих м'язів живота малоінвазивним
                    методом
                  </li>
                  <li>-Ліпосакція</li>
                  <li>-Ліпофілінг</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('intimate')}>
          Інтимна хірургія {openProfSkills === 'hintimate' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'intimate' && (
          <ul className={openProfSkills === 'intimate' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('intimateDetails')}>
                Інтимна хірургія
                {openSubProfSkills === 'intimateDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'intimateDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'intimateDetails' ? styles.open : ''
                  }
                >
                  <li>-Збільшення статевого члена.</li>
                  <li>-Зменшення статевих губ жінок</li>
                </ul>
              )}
            </li>
          </ul>
        )}

        <h3 onClick={() => toggleSection('purulent')}>
          Гнійна хірургія {openProfSkills === 'purulent' ? '▲' : '▼'}
        </h3>
        {openProfSkills === 'purulent' && (
          <ul className={openProfSkills === 'purulent' ? styles.open : ''}>
            <li>
              <h4 onClick={() => toggleSubSection('purulentDetails')}>
                Гнійна хірургія
                {openSubProfSkills === 'purulentDetails' ? '▲' : '▼'}
              </h4>
              {openSubProfSkills === 'purulentDetails' && (
                <ul
                  className={
                    openSubProfSkills === 'purulentDetails' ? styles.open : ''
                  }
                >
                  <li>-Розкриття і дренування абсцесів і флегмон</li>
                  <li>-Розкриття парапроктитів</li>
                  <li>-Операції при кістах куприка</li>
                  <li>
                    -Ампутація нижніх кінцівок при гангренах судинного ґенезу
                  </li>
                  <li>-Лікування "Діабетичної ступні"</li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
