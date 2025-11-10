import { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";

export const AboutUs = () => {
  const [overlayOpen, setOverlayOpen] = useState(null);

  const divClick = (index, e) => {
    e.stopPropagation();
    setOverlayOpen(overlayOpen === index ? null : index);
  };

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setTimeout(() => {
          scrollToHashElement(hash);
        }, 100);
      }
    };
    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  const scrollToHashElement = (hash) => {
    const element = document.getElementById(hash);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <section id="about" className={styles.section_about}>
        <div className={styles.title_text}>
          <p>Давайте знакомиться!</p>
          <h3>Мы — магазин натуральных тканей</h3>
        </div>
        <div className={styles.tiles}>
          <div className={styles.tiles_container}>
            <div className={styles.tiles_text}>
              <p>
                <b>«Центр ткани»</b> — это магазин натуральных тканей и
                трикотажа высокого качества. У нас вы найдёте широкий выбор
                материалов для одежды и текстиля: хлопок, лен, футер и многое
                другое.
              </p>
            </div>
            <img
              src="/Rectangle 01.jpg"
              alt="Ткани"
              className={styles.tiles_img}
            />
          </div>

          <div className={styles.tiles_container}>
            <img
              src="/Rectangle 02.jpg"
              alt="Ткани"
              className={styles.tiles_img}
            />
            <div className={styles.tiles_text}>
              <p>
                Мы работаем с 2020 года и сотрудничаем напрямую с ведущими
                фабриками <b>Турции, Беларуси и Китая</b>. Среди наших партнёров
                —<b>Sabaev, Wella, IPEKER, Оршанский льнокомбинат</b> и другие
                известные производители.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.icon_container}>
          <p>
            Мы всегда стараемся радовать вас актуальными коллекциями и<br />
            качественным обслуживанием.
          </p>
          <div className={styles.icons}>
            <img src="/rokt-logo.svg" alt="Логотип" />
            <img src="/ideo-logo.svg" alt="Логотип" />
            <img src="/finsweet-logo.svg" alt="Логотип" />
            <img src="/vml-logo.svg" alt="Логотип" />
          </div>
        </div>
      </section>

      <section id="delivery" className={styles.section_delivery}>
        <div className={styles.section_delivery_text}>
          <h3>Доставка</h3>
          <p>
            Отгружаем посылки два раза в неделю (среда/суббота) Сдеком, Почтой
            России. Оптовые
            <br /> заказы отправляем транспортными компаниями Magic Trans, DPD,
            Деловые Линии, Кит.
          </p>
        </div>
        <div className={styles.section_delivery_cards}>
          <div className={styles.delivery_card}>
            <div className={styles.delivery_card_title}>
              <h5>Самовывоз</h5>
              <p>1</p>
            </div>
            <p>
              ул. Московская 21/3,
              <br /> пн-пт 10:00-18:00
            </p>
          </div>
          <div className={styles.delivery_card}>
            <div className={styles.delivery_card_title}>
              <h5>СДЭК</h5>
              <p>2</p>
            </div>
            <p>2-4 дня</p>
          </div>
          <div className={styles.delivery_card}>
            <div className={styles.delivery_card_title}>
              <h5>Почта России</h5>
              <p>3</p>
            </div>
            <p>5-7 дней</p>
          </div>
          <div className={styles.delivery_card}>
            <div className={styles.delivery_card_title}>
              <h5>Ozon</h5>
              <p>4</p>
            </div>
            <p>1-2 дня</p>
          </div>
          <div className={styles.delivery_card}>
            <div className={styles.delivery_card_title}>
              <h5>Доставка курьером</h5>
              <p>5</p>
            </div>
            <p>1-2 дня</p>
          </div>
        </div>
      </section>

      <section id="pay" className={styles.section_pay}>
        <div className={styles.section_pay_text}>
          <h3>Оплата</h3>
          <p>Вы можете оплатить заказ любым предложенным удобным способом.</p>
        </div>
        <div className={styles.section_pay_cards}>
          <div className={styles.pay_card}>
            <div id={styles.pay_card_img01}></div>
            <p>Банковской картой на сайте</p>
          </div>
          <div className={styles.pay_card}>
            <div id={styles.pay_card_img02}></div>
            <p>Наличными при получении</p>
          </div>
          <div className={styles.pay_card}>
            <div id={styles.pay_card_img03}></div>
            <p>Оплата по счету на юридическое лицо</p>
          </div>
        </div>
      </section>

      <section id="questions" className={styles.section_questions}>
        <h3 className={styles.section_questions_title}>
          Часто задаваемые вопросы
        </h3>
        <div className={styles.question_delivery}>
          <h3>Вопросы о доставке</h3>
          <div className={styles.overlays}>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 1 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(1, e)}
            >
              Как узнать трек-номер
              {overlayOpen === 1 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 2 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(2, e)}
            >
              Сроки отправки заказа
              {overlayOpen === 2 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 3 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(3, e)}
            >
              Доставка в регионы
              {overlayOpen === 3 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 4 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(4, e)}
            >
              Самовывоз заказа
              {overlayOpen === 4 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 5 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(5, e)}
            >
              Как рассчитать стоимость доставки
              {overlayOpen === 5 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.question_order}>
          <h3>Вопросы по заказу</h3>
          <div className={styles.overlays}>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 6 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(6, e)}
            >
              Оплата заказа
              {overlayOpen === 6 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 7 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(7, e)}
            >
              Обмен и возврат
              {overlayOpen === 7 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
            <div
              className={`${styles.modal_link_name} ${
                overlayOpen === 8 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(8, e)}
            >
              Оформление заказа
              {overlayOpen === 8 && (
                <>
                  <p>Текст</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.section_contacts}>
        <h3 className={styles.section_contacts_title}>Контакты</h3>

        <div className={styles.contacts_container}>
          <div className={styles.contacts_info}>
            <div className={styles.info_container}>
              <div className={styles.info_name}>
                <img src="/location-01.svg" alt="Иконка" />
                <p>Наш адрес</p>
              </div>
              <p>ул. Кабардинская 158, Нальчик, КБР</p>
            </div>

            <div className={styles.info_container}>
              <div className={styles.info_name}>
                <img src="/call-01.svg" alt="Иконка" />
                <p>Телефон</p>
              </div>
              <p>+7 (928) 716-66-26</p>
            </div>

            <div className={styles.info_container}>
              <div className={styles.info_name}>
                <img src="/mail-01.svg" alt="Иконка" />
                <p>E-mail</p>
              </div>
              <p>center.tkani@yandex.ru</p>
            </div>

            <div className={styles.info_container}>
              <div className={styles.info_name}>
                <img src="/clock-01.svg" alt="Иконка" />
                <p>Часы работы</p>
              </div>
              <p>Пн-Сб: 9:00 - 18:00</p>
            </div>
          </div>

          <form className={styles.contacts_form}>
            <h3>Напишите нам по любому вопросу</h3>
            <div className={styles.form}>
              <div className={styles.form_inputs}>
                <div className={styles.input}>
                  <p>Имя </p>
                  <input type="text" name="name" id="name" />
                </div>
                <div className={styles.input}>
                  <p>Телефон</p>
                  <input type="tel" name="tel" id="tel" />
                </div>
              </div>
              <div className={styles.input}>
                <p>Сообщение</p>
                <textarea name="area" id="area"></textarea>
              </div>
            </div>
            <div className={styles.checkbox_text}>
              <input
                type="checkbox"
                name="check"
                id="check"
                className={styles.checkbox}
                required
              />
              <label for="check">
                Я прочитал Privacy Policy и согласен с условиями безопасности и
                обработки персональных данных
              </label>
            </div>
            <button type="submit" className={styles.subm_btn}>
              Отправить
            </button>
          </form>
        </div>

        <div className={styles.contacts_map}>
          <a href="https://yandex.ru/maps/30/nalchik/?utm_medium=mapframe&utm_source=maps">
            Нальчик
          </a>
          <a href="https://yandex.ru/maps/30/nalchik/?ll=43.629167%2C43.492385&utm_campaign=desktop&utm_medium=mapframe&utm_source=maps&z=18">
            Нальчик — Яндекс Карты
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=43.629167%2C43.492385&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=18"
            frameborder="1"
            allowfullscreen="true"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
