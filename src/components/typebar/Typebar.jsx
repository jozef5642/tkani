import { observer } from "mobx-react-lite"
import styles from "./Typebar.module.css"
import { Context } from "../../main";
import { useState, useRef, useContext } from "react";
import { Brandbar } from "../brandbar/Brandbar";

export let Typebar = observer(() =>{
    const {tkans} = useContext(Context)
    return(
        <>
        <div className="w-full flex gap-2">
            {tkans.types.map(type =>
                  
                  <ul className="bg-[#F1F0EE] p-4 rounded-lg  text-accentDark text-nowrap w-[293px] text-[17px]" key={type.id}>
                    {type.name}

                
                    </ul>
                  )}

        </div>

        
        </>
    )
})