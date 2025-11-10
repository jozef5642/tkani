import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../Routes";
import { SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { Container } from "@radix-ui/themes";


export let Approuter = observer(() => {

        const {user} = useContext(Context)

        console.log(user)

    return(
        <>
        
        {/* <div className="flex justify-center items-center min-h-screen"> */}
            <Routes>
                {/** Приватные маршруты (только для авторизованных) */}
                {user.isAuth && authRoutes.map(({ path, element }) => (
                <Route
                    key={path}         // уникальный ключ
                    path={path}        // URL
                    element={element}  // JSX компонента
                />
                ))}


                    {/** Публичные маршруты (доступны всем) */}
                {publicRoutes.map(({ path, element }) => (
                <Route
                        key={path}
                        path={path}
                        element={element}
                />
                    ))}

                <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />

            </Routes>
       {/* </div> */}
        </>
    );
});