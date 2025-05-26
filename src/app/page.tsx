import { sendMail } from '@/lib/send-mail';

export default function Home() {
  return (
      <>
        <div className="main">
          <h2 className="main__header">С нами работают военнослужащие:</h2>
          <div className="main__list">
            <img className="main__checklist" src="/img/mo_rf.jpg" alt="mo_rf"/>
            <img className="main__checklist" src="/img/fsbrf.jpg" alt="fsb"/>
            <img className="main__checklist" src="/img/sk_rf.jpg" alt="sk"/>
            <img className="main__checklist" src="/img/mcs_rf.jpg" alt="mcs"/>
            <img className="main__checklist" src="/img/mvd_rf.jpg" alt="mvd"/>
            <img className="main__checklist" src="/img/rosgv.jpg" alt="rosgv"/>
          </div>
          <div className="main__content">
            <h2 className="main__content__header">Бесплатная консультация военного юриста</h2>
            <div className="main__content__list">
              <p><b>&gt; </b> Вы можете получить бесплатную консультацию военного юриста онлайн или по телефону,
                если: <br/>
                <b> + </b>небольшой базовый вопрос, подразумевающий ответ &ldquo;да&rdquo; или &ldquo;нет&rdquo; + ссылка на правовой акт, <br/>
                <b> + </b> у нас уже были такие обращения, то есть вопрос не трудозатратный и небольшой<br/>
                <b> + </b> консультация на тему компенсации по ранению или гибели военнослужащего <br/>
                <b> + </b> в индивидуально оговоренных с клиентом случаях
              </p>
            </div>
            <h2 className="main__content__header">Платные консультации</h2>
            <div className="main__content__list">
              <p>
                В зависимости от сложности и количества вопросов, необходимости изучения документов и общего объема
                трудозатрат и времени, цены следующие:
              </p>
              <table>
                <tbody>
                  <tr>
                    <th>Краткое описание услуги</th>
                    <th>Стоимость</th>
                  </tr>
                  <tr>
                    <td>Простой вопрос, предполагающий ответ «да» или «нет» со ссылкой на один или несколько правовых
                      актов
                    </td>
                    <td>1000р</td>
                  </tr>
                  <tr>
                    <td>Вопрос средней сложности или комплекс вопросов, требующий изучения документов и предполагающий
                      большие трудозатраты со стороны юриста
                    </td>
                    <td>3000р</td>
                  </tr>
                  <tr>
                    <td>Сложный вопрос или комплекс вопросов, требующий изучения документов, отправки запросов и
                      предполагающий большие трудозатраты со стороны юриста
                    </td>
                    <td>5000р</td>
                  </tr>
                  <tr>
                    <td>Частные случаи, не попадающие под предыдущие категории вопросов</td>
                    <td>По договоренности</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="main__content__form">
              <h2 className="main__content__form__header">Есть вопрос? Задайте его: </h2>
              <form className="cons__form" action="/submit" method="post">
                <label htmlFor="question">Ваш вопрос:</label>
                <textarea id="question" name="question" rows={4} required/>

                <label htmlFor="phone">Номер телефона:</label>
                <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required
                       pattern="^\+7\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$"/>

                <button type="submit">Отправить</button>
                <button type="button" onClick={sendMail}>email</button>
              </form>
            </div>
          </div>
        </div>
        <div className="service">
          <h2 className="service__header">Услуги военного юриста</h2>
          <div className="services">
            <div className="service__list">
              <img src="/img/ran_itog.png" alt="ran__itog"/>
              <p><b>Выплаты по ранению</b></p>
            </div>
            <div className="service__list">
              <img src="/img/gibel.jpg" alt="gibel"/>
              <p><b>Выплаты по гибели</b></p>
            </div>
            <div className="service__list">
              <img src="/img/bezvesti_itog.png" alt="bezvesti__itog"/>
              <p><b>Безвести пропавшие СВО</b></p>
            </div>
          </div>
        </div>
        <div className="feedback">
          <h2 className="feadback__header">
            Отзывы о консультациях ВПБ &ldquo;Юстиция&rdquo;
          </h2>
          <div className="feadback__list">
            <img className="feadback__checklist" src="/img/отзыв1.jpg" alt="от1"/>
            <img className="feadback__checklist" src="/img/отзыв2.jpg" alt="от2"/>
            <img className="feadback__checklist" src="/img/отзыв3.jpg" alt="от3"/>
            <img className="feadback__checklist" src="/img/отзыв4.jpg" alt="от4"/>
            <img className="feadback__checklist" src="/img/отзыв5.jpg" alt="от5"/>
            <img className="feadback__checklist" src="/img/отзыв6.jpg" alt="от6"/>
          </div>
          <div className="feadback__stage">
            <h2 className="feadback__stage__header">Этапы работ</h2>
            <p>
              1. Сбор информации, уточнение данных через типовые вопросы, формулировка вопроса или
              вопросов, <br/> которые станут предметом консультации. <br/>
              2. Оценка данных. Выясняем на каком основе будет проходить консультация (бесплатно или нет). В случае с
              платной,<br/> определяем сложность вопроса и цену услуги.<br/>
              3. Оформление документов. Прием оплаты, если работаем на платной основе. Предоставление чека клиенту,
              как <br/> подтверждение договора на оказание услуги. Назначаем время и формат консультации (текстовый или
              в формате <br/> телефонного разговора с военным юристом).<br/>
              4. Исполнение обязательств. Оказание консультации в формате, удобном клиенту в назначенное время.
            </p>
            <h2 className="feadback__stage__header">Пакетные предложения с ежемесячной оплатой</h2>
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>Тариф Лайт</th>
                  <th>Тариф Оптима</th>
                  <th>Тариф ВИП</th>
                </tr>
                <tr>
                  <td>Персональный юрист</td>
                  <td>+</td>
                  <td>+</td>
                  <td>+</td>
                </tr>
                <tr>
                  <td>Текстовых ответов на вопросы (в зависимости от сложности)</td>
                  <td>до 10</td>
                  <td>до 20</td>
                  <td>до 50</td>
                </tr>
                <tr>
                  <td>Голосовые консультации юриста</td>
                  <td>2</td>
                  <td>4</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Время обработки запроса, часов</td>
                  <td>До 8</td>
                  <td>До 5</td>
                  <td>До 2 (в рабочее время)</td>
                </tr>
                <tr>
                  <td>Оформление запросов в органы / структуры</td>
                  <td>2</td>
                  <td>4</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Себестоимость такого набора услуг</td>
                  <td>27000</td>
                  <td>54000</td>
                  <td>162000</td>
                </tr>
                <tr>
                  <td>Размер скидки</td>
                  <td>-25%</td>
                  <td>-30%</td>
                  <td>-40%</td>
                </tr>
                <tr>
                  <td>Цена в месяц для клиента:</td>
                  <td>20250 р/мес</td>
                  <td>37800 р/мес</td>
                  <td>97200 р/мес</td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="#" className="button">Оформить подписку</a></td>
                  <td><a href="#" className="button">Оформить подписку</a></td>
                  <td><a href="#" className="button">Оформить подписку</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="cases">
          <div className="cases__down">
            <h2 className="cases__down__header">Наши юристы</h2>
            <div className="cases__down__list">
              <div className="cases__down__checklist">
                <div className="cases__down__checklist__data">
                  <img className="cases__down__checklist__photo" src="/img/yur1.jpg" alt="ur1"></img>
                  <div className="cases__down__checklist__text">
                    <b> Полковник юстиции (запаса) Харьковский Станислав Геннадьевич </b> <br/>
                    ✔️С 2016 года адвокат Адвокатской палаты Ленинградской области.<br/>
                    ✔️до 2016 г. проходил действительную военную службу на различных должностях в военных прокуратурах
                    окружного и гарнизонного звена<br/>
                    ✔️являлся военным прокурором 4-х военных прокуратур гарнизонов.<br/>
                    ✔️окончил в 1983 г. Военно-юридический факультет Военного Краснознаменного института МО РФ<br/>
                    ✔️Специализируется в основном на защите по уголовным делам.
                  </div>
                </div>
                <button className="cases__down__checklist__btn">Написать Юристу</button>
              </div>
              <div className="cases__down__checklist">Фото и краткая инфа по юристу + кнопка обратиться к юристу</div>
            </div>
          </div>
        </div>
      </>
  );
}
