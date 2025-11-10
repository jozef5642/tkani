import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Политика конфиденциальности</h1>

      <section className={styles.section}>
        <h2>1. Общие положения</h2>
        <p className={styles.paragraph}>
          1.1. Обработка персональных данных осуществляется в соответствии с
          Федеральным законом "О персональных данных" № 152-ФЗ от 27.07.2006.
          
        </p>
        <p className={styles.paragraph}>
          1.2. Пользователь, передавая свои персональные данные, даёт согласие на
          их обработку.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Персональные данные, собираемые на сайте</h2>
        <p className={styles.paragraph}>
          2.1. Имя, номер телефона, адрес электронной почты, адрес доставки,
          информация, вводимая пользователем при оформлении заказа, данные из
          форм обратной связи, переписка в онлайн-чате.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Цели обработки персональных данных</h2>
        <p className={styles.paragraph}>
          3.1. Обработка данных для оформления и доставки товаров.
        </p>
        <p className={styles.paragraph}>
          3.2. Обработка данных для связи с пользователем.
        </p>
        <p className={styles.paragraph}>
          3.3. Обработка данных в соответствии с требованиями законодательства.
        </p>
        <p className={styles.paragraph}>
          3.4. Проведение анализа персональных данных для улучшения качества
          обслуживания.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Передача данных третьим лицам</h2>
        <p className={styles.paragraph}>
          4.1. Персональные данные могут передаваться третьим лицам только для
          целей выполнения заказа и в случаях, предусмотренных
          законодательством.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Хранение и защита данных</h2>
        <p className={styles.paragraph}>
          5.1. Данные хранятся в защищенной системе.
        </p>
        <p className={styles.paragraph}>
          5.2. Срок хранения данных — 1 год после исполнения заказа или до отзыва
          согласия.
        </p>
        <p className={styles.paragraph}>
          5.3. Используются технические и организационные меры для защиты данных.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Права пользователя</h2>
        <p className={styles.paragraph}>
          6.1. Пользователь имеет право отозвать согласие на обработку данных.
        </p>
        <p className={styles.paragraph}>6.2. Для этого можно:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            отправить письмо на Email: center.tkan@yandex.ru;
          </li>
          <li className={styles.listItem}>воспользоваться формой на сайте;</li>
          <li className={styles.listItem}>
            позвонить по телефону - 7 (502) 716-69-26.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>7. Заключительные положения</h2>
        <p className={styles.paragraph}>
          7.1. Политика может быть изменена. Актуальная версия всегда доступна на
          сайте.
        </p>
        <p className={`${styles.paragraph} ${styles.lastUpdate}`}>
          Дата последнего обновления: май 2025 года.
        </p>
      </section>
    </div>
  );
};
