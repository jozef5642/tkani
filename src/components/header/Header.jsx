import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Header.module.css'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const catalogClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="w-full bg-light text-dark font-inter border-b border-light/10">
      {/* Верхняя панель */}
      <section className="flex justify-between items-center px-6 py-2 text-sm bg-light text-dark">
        <a href="#" className="hover:text-accentDark transition-colors">
          Мы на WB
        </a>

        <nav className="flex gap-6">
          <Link to="/about_us" className="hover:text-accentDark transition-colors">
            О нас
          </Link>
          <Link to="/" className="hover:text-accentDark transition-colors">
            Оплата и доставка
          </Link>
          <Link to="/" className="hover:text-accentDark transition-colors">
            Часто задаваемые вопросы
          </Link>
          <Link to="/" className="hover:text-accentDark transition-colors">
            Программа лояльности
          </Link>
          <Link to="/" className="hover:text-accentDark transition-colors">
            Контакты
          </Link>
        </nav>

        <a href="#" className="hover:text-accentDark transition-colors">
          Мы на OZON
        </a>
      </section>
      <hr/>

      {/* Нижняя панель */}
      <section className="flex justify-between items-center px-8 py-5 bg-light text-accentDark">
        {/* Левая часть — кнопки */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={catalogClick}
              className="flex items-center gap-2 bg-accent text-light px-5 py-2 rounded-xl"
            >
              Каталог
              <img src="/arrow white.svg" alt="Стрелка" className="w-4 h-4" />
            </button>

            {/* Модалка */}
            {isModalOpen && (
              <div
                onClick={closeModal}
                className="fixed inset-0 bg-accentDark/40 flex items-start justify-center z-30"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-24 bg-light shadow-lg rounded-xl p-6 w-11/12 max-w-md z-50"
                >
                  <Modal />
                </div>
              </div>
            )}
          </div>

          <Link
            to="/"
            className="text-accentDark hover:text-accent transition font-manrope"
          >
            Работы из наших тканей
          </Link>
          <Link
            to="/"
            className="text-accentDark hover:text-accent transition font-manrope"
          >
            Скидки и акции
          </Link>
        </div>

        {/* Центр — логотип */}
        <div className="flex items-center gap-2">
          <img src="/Logo Icon.svg" alt="Логотип" className="w-7 h-7" />
          <img
            src="/CENTER TKANI.svg"
            alt="Название"
            className="h-5 sm:h-5 w-auto"
          />
        </div>

        {/* Правая часть — поиск и иконки */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск по сайту"
                  className="pl-4 pr-10 py-2 border border-dark/20 rounded-full focus:outline-none focus:border-accent bg-white text-dark placeholder-dark/50"
                />
                <img
                  src="/Loupe.svg"
                  alt="Иконка поиска"
                  className="bg-accent absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-dark/30 p-2"
                />
              </div>
            </div>

          <Link to="/log_in">
            <img
              src="/User Icon.svg"
              alt="Профиль"
              className="w-6 h-6 hover:opacity-70 transition"
            />
          </Link>
          <Link to="/">
            <img
              src="/Bag Icon.svg"
              alt="Корзина"
              className="w-6 h-6 hover:opacity-70 transition"
            />
          </Link>
        </div>
      </section>
    </header>
  );
};
