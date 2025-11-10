import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { Context } from "../../main";
import styles from'./Navbar.module.css'
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, ABOUTUS_ROUTE} from "../../utils/consts";
import { Typebar } from "../typebar/Typebar";



export const NavBar = observer(() => {

    const {user} = useContext(Context)
    
    const {brands} = useContext(Context)
    const [isOpen, setIsOpen] = useState(false); // Каталог
    const [mobileNav, setMobileNav] = useState(false); // Мобильное меню
    const [showSearch, setShowSearch] = useState(false); // Мобильный поиск
    const timeoutRef = useRef(null);
  
    const handleMouseEnter = () => {
      if (window.innerWidth < 1024) return;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      if (window.innerWidth < 1024) return;
      timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
    };

  return (
    <header className="w-full bg-light text-dark font-inter border-b border-light/10 relative z-50">
      {/* Верхняя панель (desktop only) */}
      <section className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-light text-dark">
        <a href="#" className="hover:text-accentDark transition-colors">
          Мы на WB
        </a>

        <nav className="flex gap-6">
          <NavLink to={ABOUTUS_ROUTE} className="hover:text-accentDark transition-colors">
            О нас
          </NavLink>
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

      <hr className="hidden md:block" />

      {/* Нижняя панель */}
      <section className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-light text-accentDark relative">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          {/* Каталог (desktop only) */}
          <div className="relative hidden lg:inline-block">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-row px-3 py-2 bg-accent text-light rounded-lg"
            >
              Каталог <img src="/arrow white.svg" alt=""className="pl-3"/>
            </button>

            {isOpen && (
              <div
                className="absolute left-0 mt-2 w-fit bg-light text-dark rounded-xl shadow-lg 
                           transition-all duration-300 ease-in-out z-50 animate-fadeIn"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-[#FFFF] p-2 flex flex-row gap-3 rounded-xl w-fit">
                  <Typebar/>
                  
                </div>
              </div>
            )}
          </div>
        </div>


      <div className="flex justify-start gap-7">
        <Link to="/" className="ml-5 hover:text-accent hidden md:block">Работы из наших тканей</Link>
         <Link to="/" className="mr-5 hover:text-accent hidden md:block">Скидки и акции</Link>
      </div> 

        {/* Центр — логотип */}
        <NavLink to={SHOP_ROUTE}>
        <div className="flex flex-1 justify-center md:justify-start m-3 sm:justify-start items-center gap-1">
          <img src="/Logo Icon.svg" alt="Логотип" className="w-5 h-5 sm:w-9 sm:h-7" />
          
          <img
            src="/CENTER TKANI.svg"
            alt="Название"
            className="h-4 sm:h-3 w-auto transition-all duration-300"
            style={{ transform: showSearch ? "scale(0.85)" : "scale(1)" }}
          />
        </div>
        </NavLink>
     

        {/* Правая часть */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Поиск — desktop */}
          <div className="hidden md:block relative">
            <input
              type="text"
              name="search"
              placeholder="Поиск по сайту"
              className="pl-4 pr-10 py-2 border border-dark/20 rounded-full focus:outline-none focus:border-accent bg-white text-dark placeholder-dark/50"
            />
            <img
              src="/Loupe.svg"
              alt="Поиск"
              className="cursor-pointer bg-accent absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-dark/30 p-2"
            />
          </div>

          {/* Иконка поиска — мобильная */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className={`block md:hidden transition-colors ${
              showSearch ? "text-accent" : "text-dark"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              // stroke={showSearch ? "#e63946" : "currentColor"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </button>

          {/* Корзина */}
          <NavLink to='/'>
            <img src="/Bag Icon.svg" alt="Корзина" className="w-6 h-6" />
          </NavLink>

           {user.isAuth ? 
          <NavLink to={ADMIN_ROUTE} className="hidden md:block">
            <Avatar.Root className="inline-flex h-6 w-6 select-none items-center justify-center overflow-hidden rounded-full bg-gray-200 align-middle"> //Главный контейнер
                            <Avatar.Image
                              className="h-full w-full object-cover"
                              src="https://i.pravatar.cc/100"//адрес картинки 
                              alt="User avatar"
                            />
                            <Avatar.Fallback //картинка если не прогрузилась(JD)
                              className="text-gray-700 text-sm font-medium"
                              delayMs={600}
                            >
                              JD
                            </Avatar.Fallback>
                          </Avatar.Root>
          </NavLink> 
          :
          <Link to={LOGIN_ROUTE} className="hidden md:block">
            <img src="/User Icon.svg" alt="Профиль" className="w-6 h-6" />
          </Link>}

          {/* Бургер справа */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* ====== Поиск под хедером (mobile only, slide-down animation) ====== */}
      <div
        className={`md:hidden bg-light border-b border-dark/10 transition-all duration-300 overflow-hidden ${
          showSearch ? "max-h-24 py-3 animate-slideDown" : "max-h-0 py-0"
        }`}
      >
        <div className="flex items-center gap-2 px-4">
          <input
            type="text"
            placeholder="Поиск..."
            autoFocus={showSearch}
            className="flex-1 border border-dark/20 rounded-full px-4 py-2 focus:outline-none focus:border-accent bg-white text-dark placeholder-dark/50"
          />
          <button onClick={() => setShowSearch(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="bg-accent w-9 h-9 rounded-full border p-2" fill="none" viewBox="0 0 24 24" stroke="#e63946">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ====== Мобильное меню (выезжает справа) ====== */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-light shadow-lg border-l border-dark/10 transform transition-transform duration-300 z-40 ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="font-semibold text-lg">Меню</h2>
          <button onClick={() => setMobileNav(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-4">
          <Link to="/" className="hover:text-accent">О нас</Link>
          <Link to="/" className="hover:text-accent">Оплата и доставка</Link>
          <Link to="/" className="hover:text-accent">Часто задаваемые вопросы</Link>
          <Link to="/" className="hover:text-accent">Программа лояльности</Link>
          <Link to="/" className="hover:text-accent">Контакты</Link>
          <hr />
          <Link to="/" className="hover:text-accent">Работы из наших тканей</Link>
          <Link to="/" className="hover:text-accent">Скидки и акции</Link>
        </nav>
      </div>

      {/* Анимация slide-down */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
});
