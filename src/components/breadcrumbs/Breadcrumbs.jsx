import React from "react";
import styles from "./Breadcrumbs.module.css";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
    const breadcrumbNameMap = {
        '/about_us' : '> О нас',
        '/catalog_home' : '> Для дома ',
        '/discounts' : '> Скидки и акции',
        '/personal_account' : '> Личный кабинет',
        '/our_works' : '> Работы из наших тканей',
        '/privacy_policy' : '> Политика конфиденциальности',

    }



  const location = useLocation();
  const pathname = location.pathname;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol>
        <li>
          <Link className={styles.title} to="/">Главная</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = breadcrumbNameMap[to] || value

          return (
            <li key={to}>
              {isLast ? <span className={styles.title_path}>{name}</span> : <Link className={styles.title_path} to={to}>{value}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
