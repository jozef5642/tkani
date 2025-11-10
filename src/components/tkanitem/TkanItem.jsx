import { observer } from "mobx-react-lite"
import styles from "./TkanItem.module.css"
import { useContext } from "react"
import { Context } from "../../main"
import { Card } from "@radix-ui/themes"


export let TkanItem = ({tkan}) =>{

const {tkans} = useContext(Context)
    return(
        <>
        
            <Card className="w-2/6 h-full" >
            <div className="bg-white rounded-lg p-3">   
           <img src={tkan.img}/>
           <h6 className="text-accentDark text-neutral-950 font-semibold">{tkan.name}</h6>
           <h5 className="text-accent text-accent font-semibold">{tkan.price} P/m</h5>
            </div> 
            </Card>
        
        
        </>
    )
}