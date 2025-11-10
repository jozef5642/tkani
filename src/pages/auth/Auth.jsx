import * as Tabs from "@radix-ui/react-tabs";
import styles from "./Auth.module.css";
import { REGISTRATION_ROUTE } from "../../utils/consts";
import { Link, NavLink } from "react-router-dom";

export const Auth = () => {
  return (
    <>
    
        <div
      className="flex justify-center items-center min-h-screen"
    >
         <div className="w-[600px] bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-[32px] text-accentDark font-bold text-start mb-6">   
            Войти
            </h2>

            <form className="flex flex-col">
                <p className="text-dark m-0 mt-2">Электронная почта</p>
                <input
                    type="email"
                    placeholder="Введите ваш email..."
                    className="border border-gray-300 rounded-lg px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <p className="text-dark m-0 mt-2">Пароль</p>
                <input
                    type="password"
                    placeholder="Введите ваш пароль..."
                    className="mb-2 border border-gray-300 rounded-lg px-4 py-2 mt-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />

                 <button
                    type="button"
                    className="bg-accent mt-2 text-white px-6 py-2 rounded-lg hover:bg-accentDark transition-colors"
                    >
                    Войти 
                </button>

                    <hr className="my-6 border-t border-gray-300" />

                <div className="flex flex-row justify-between items-center m-2 mt-4">
                    <p className="text-accentDark">Нет Аккаунта?</p>
                    
                    <NavLink to={REGISTRATION_ROUTE}>
                        <button
                            type="button"
                            className="bg-transparent mt-2 text-accentDark px-6 py-2 rounded-lg border-solid border-2 border-accentDark"
                            >
                            Зарегистрируйтесь 
                        </button> 
                    </NavLink>
                    
                </div>
                
            </form>
         </div>

    </div>
        
    
    </>
  );
};
