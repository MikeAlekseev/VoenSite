import Link from "next/link";

import {Carousel, CarouselSlide} from "@/app/components/Carousel";

import feedback1Img from './resources/feedback1.jpg'
import feedback2Img from './resources/feedback2.jpg'
import feedback3Img from './resources/feedback3.jpg'
import feedback4Img from './resources/feedback4.jpg'
import feedback5Img from './resources/feedback5.jpg'
import feedback6Img from './resources/feedback6.jpg'
import {AskQuestion} from './AskQuestion'

const feedbackSlides: CarouselSlide[] = [
  { id: '1', src: feedback1Img, alt: 'Отзыв' },
  { id: '2', src: feedback2Img, alt: 'Отзыв' },
  { id: '3', src: feedback3Img, alt: 'Отзыв' },
  { id: '4', src: feedback4Img, alt: 'Отзыв' },
  { id: '5', src: feedback5Img, alt: 'Отзыв' },
  { id: '6', src: feedback6Img, alt: 'Отзыв' },
]

export default function Home() {
  return (
      <>
        <div className="help">
          <h1 className="help__up pc-container">Консультация военного юриста</h1>
          <div className="help__down pc-container">
            <div className="help__down__left">
              <h2 className="help__down__left__header">Юридическая защита военнослужащих и их семей</h2>

              <div className="p"><b>+</b> консультируют юристы, проходившие службу в органах военной юстиции</div>
              <div className="p"><b>+</b> тщательная подготовка к консультации, углубленная работа с клиентом</div>
              <div className="p"><b>+</b> пакетное предложение для тех, у кого часто возникают вопросы</div>
              <div className="p"><b>+</b> низкие цены</div>
            </div>
            <AskQuestion darkMode/>
          </div>
        </div>
        <div className="main">
          <h2 className="main__header">С нами работают военнослужащие:</h2>
          <div className="main__list">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="main__checklist" src="/img/mo_rf.jpg" alt="mo_rf"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="main__checklist" src="/img/fsbrf.jpg" alt="fsb"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="main__checklist" src="/img/sk_rf.jpg" alt="sk"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="main__checklist" src="/img/mcs_rf.jpg" alt="mcs"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="main__checklist" src="/img/mvd_rf.jpg" alt="mvd"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="main__checklist" src="/img/rosgv.jpg" alt="rosgv"/>
          </div>
        </div>
        <div className="boss">
          <div className="main__content">
            <h2 className="main__content__header">Бесплатная консультация военного юриста</h2>
            <div className="main__content__list">
              <p> Вы можете получить бесплатную консультацию военного юриста онлайн или по телефону,
                если:</p>
              <div className="line">
                <div className="plus" style={{fontSize: '35px', color: 'green'}}> +</div>
                <p className="plusText"> небольшой базовый вопрос,
                  подразумевающий ответ &ldquo;да&rdquo; или &ldquo;нет&rdquo; +
                  ссылка на правовой акт, небольшой базовый вопрос,
                  подразумевающий ответ &ldquo;да&rdquo; или &ldquo;нет&rdquo; +
                  ссылка на правовой акт</p>
              </div>
              <div className="line">
                <div className="plus" style={{fontSize: '35px', color: 'green'}}> +</div>
                <p className="plusText"> у нас уже были такие обращения, то есть вопрос не трудозатратный и
                  небольшой </p><br/>
              </div>
              <div className="line">
                <div className="plus" style={{fontSize: '35px', color: 'green'}}> +</div>
                <p className="plusText"> консультация на тему компенсации по ранению или гибели военнослужащего </p>
                <br/>
              </div>
              <div className="line">
                <div className="plus" style={{fontSize: '35px', color: 'green'}}> +</div>
                <p className="plusText"> в индивидуально оговоренных с клиентом случаях </p><br/>
              </div>
            </div>
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

          <AskQuestion showMessageInput/>
        </div>

        {/*</div>*/}

    <div className="service">
      <h2 className="service__header">Услуги военного юриста</h2>
      <div className="services">
        <Link href="ranenie">
          <div className="service__list">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/ran_itog.png" alt="ran__itog"/>
            <p className="service__text"><b>Выплаты по ранению</b></p>
          </div>
        </Link>
        <Link href="gibel">
          <div className="service__list">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/gibel.jpg" alt="gibel"/>
            <p className="service__text"><b>Выплаты по гибели</b></p>
          </div>
        </Link>
        <Link href="/">
          <div className="service__list">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/bezvesti_itog.png" alt="bezvesti__itog"/>
            <p className="service__text"><b>Безвести пропавшие СВО</b></p>
          </div>
        </Link>
      </div>
    </div>
    <div className="feedback">
      <h2 className="feadback__header">
        Отзывы о консультациях ВПБ &ldquo;Юстиция&rdquo;
      </h2>
      <Carousel slides={feedbackSlides} width={300}/>
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
            <td>Количество вопросов к юристу (в зависимости от сложности)</td>
            <td>до 8</td>
            <td>до 16</td>
            <td>до 30</td>
          </tr>
          <tr>
            <td>Консультации юриста по телефону</td>
            <td>2</td>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Время обработки запроса, часов</td>
            <td>До 8</td>
            <td>До 6</td>
            <td>До 4 (в рабочее время)</td>
          </tr>
          <tr>
            <td>Оформление запросов в органы / структуры</td>
            <td>2</td>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <td></td>
            <td><a href="#" className="link__black"><b>Оформить подписку</b></a></td>
            <td><a href="#" className="link__black"><b>Оформить подписку</b></a></td>
            <td><a href="#" className="link__black"><b>Оформить подписку</b></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="cases">
      <div className="cases__down">
        <h2 className="cases__down__header">Наши юристы</h2>
        <div className="cases__down__list">
          <div className="card">
            <div className="photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="white__board" src="/img/yur1.jpg" alt="yur1"/>
            </div>
            <hr/>
            <div className="info">
              <h2>Харьковский Станислав Геннадьевич</h2>
              <p className="position">Полковник юстиции (запаса)</p>
              {/*<p className="department"><i>Отдел информационных технологий и информации</i></p>*/}
              <br/><br/>
              <div className="contacts">
                ✔️С 2016 года адвокат Адвокатской палаты Ленинградской области.<br/>
                ✔️до 2016 г. проходил действительную военную службу на различных должностях в военных прокуратурах
                окружного и гарнизонного звена<br/>
                ✔️являлся военным прокурором 4-х военных прокуратур гарнизонов.<br/>
                ✔️окончил в 1983 г. Военно-юридический факультет Военного Краснознаменного института МО РФ<br/>
                ✔️Специализируется в основном на защите по уголовным делам.
                <br/><br/>
                <button className="cases__down__checklist__btn">Написать Юристу</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="white__board" src="/img/max.jpg" alt="max"/>
            </div>
            <hr/>
            <div className="info">
              <h2>Максимом Гришечко</h2>
              <p className="position">юрист с 18-летним стажем</p>
              <div className="contacts">
                ✔️Действенно и эффективно применяет на практике значительный опыт нашей юридической команды.<br/>
                ✔️Успешный опыт судебных споров.<br/>
                <br/><br/>
                В своей практике Максим занимается:<br/>
                ⭕️Консультированием по правовым вопросам, касающимся военной службы.<br/>
                ⭕️Защитой прав военнослужащих в суде и других инстанциях.<br/>
                ⭕️Помощью в оформлении и реализации выплат и компенсаций военнослужащим и их семьям.<br/>
                💬 Моя основная задача — обеспечивать защиту прав военнослужащих и их семей, а также помогать в
                решении правовых вопросов, связанных с военной службой.<br/>
                <br/><br/>
                <button className="cases__down__checklist__btn">Написать Юристу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
