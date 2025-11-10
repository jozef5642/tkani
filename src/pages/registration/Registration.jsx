import styles from "./Registration.module.css"
import * as Tabs from "@radix-ui/react-tabs";
import PhoneInput from "react-phone-input-2";

import { Link, NavLink } from "react-router-dom";

export let Registration = () => {


    return(
        <>
            <div className="flex justify-center items-center min-h-screen">        
                <div className="w-[472px] bg-[#FFFFFF] rounded-2xl shadow-xl p-8">
                    <h2 className="text-[32px] text-accentDark font-bold text-start mb-6">Регистрация</h2>
                     
                     <form className="flex flex-col">
                       
                       {/* Имя и Фамилия */}
                       <div className="w-full flex justify-between">
                            <div className="w-1/2 m-1 flex-col justify-start items-start">
                                <p className="text-dark m-0 mt-2">Имя</p>
                                <input
                                type="text"
                                placeholder=""
                                className="w-full border border-[#E4E2DF] rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>
                            
                            <div className="w-1/2 m-1 flex-col justify-start items-start">
                                <p className="text-dark m-0 mt-2">Фамилия</p>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full border border-[#E4E2DF] rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>
                        </div>

                       <p className="text-dark m-0 mt-3">Электронная почта</p>
                        <input
                        type="email"
                        placeholder="Введите ваш email..."
                        className="border border-[#E4E2DF] rounded-lg px-4 py-2 mt-1 mb-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        />


                        <PhoneInput
                            country={'ru'}
                            
                            inputClass="!w-full !border !border-[#E4E2DF] !rounded-lg !px-4 !py-2 focus:!outline-none focus:!ring-2 focus:!ring-accent"
                            placeholder="+7 (___) ___-__-__"
                        />

                        <p className="text-dark m-0 mt-3">Пароль</p>
                        <input
                        type="password"
                        placeholder="Введите ваш пароль..."
                        className="mb-2 border border-[#E4E2DF] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        />

                        <button
                            type="button"
                            className="bg-accent mt-2 text-white px-6 py-2 rounded-lg hover:bg-accentDark transition-colors"
                        >
                            Создать аккаунт 
                        </button> 

                     </form>
                </div>
            
            </div>
        </>
    )
} 