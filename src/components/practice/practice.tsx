import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMovement } from "../../types";
import { BigCard } from "../../UI/card/BigCard";
import { Close } from "../../UI/close/close";
import { CloseV2 } from "../../UI/close/closeV2";
import { Timer } from "../../UI/timer/timer";
import { ElemMini } from "../training/elemMini";
import './practice.css'

export const Practice:React.FunctionComponent = () => {
    const {currentMv} = useTypedSelector(state=>state)
    const [data, setData] = useState<IMovement>(currentMv[0])

return(
        <div className="timer_empty">
            <div  className="wrapp_close">
                <Close/>
            </div>
            <div className="wrapp_closeV2">
                <CloseV2/>
            </div>
            
            
            
            <div className="list_movements_for_training">
                {currentMv.length > 1 ?currentMv.map(element => element.name !== currentMv[0].name? <ElemMini key={element.name} data={element}/>:null):<div className="last_mv">LAST MOVEMENT</div>}
            </div>
            <BigCard data={data}/>
            <Timer setData={setData} data={data} />
        </div>
    )
}