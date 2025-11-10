import { observer } from "mobx-react-lite"
import styles from "./Shop.module.css"
import { Context } from "../../main";
import { useState, useRef, useContext } from "react";
import { Tkanlist } from "../../components/tkanlist/TkanList";
import { Slider } from "../../components/slider/Slider"

export let Shop = observer(() =>{
    const {tkans} = useContext(Context)
    return(
        <>
        <div className="flex flex-row">
            
            <Slider/>
            <Slider/>
            
        </div>
        
       <Tkanlist/>

        
        </>
    )
})