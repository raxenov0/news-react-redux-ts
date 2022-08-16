import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IMovement, TypeState } from "../../../types";
import './window.css'
const remove = require('./../../../image/cancel.png')

interface IStateElement{
    data:IMovement,
    setFn:any
}

export const Window: React.FunctionComponent<IStateElement> = ({data, setFn}) => {
    const [sets, setSets] = useState<string>(data.approach)
    const [relax, setRelax] = useState<string>(data.relax)
    const dispatch = useDispatch()

    function eventChange(){
        if(sets =='' || relax=="" || parseInt(sets)<1 || parseInt(relax)< 1) {
            return false
    } else return true
}

    function handleClick(){
        const object:IMovement = {
            ...data, approach:sets, relax:relax,
        }
        eventChange()
        dispatch({type:TypeState.StateEdit, payload:object})
    }

    

    return(
        <div className="window_setting">
            <img onClick={()=>setFn(false)} className="pen_window" src={remove} alt="" />
            <p>Sets(count):</p>
            <input type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSets(e.target.value)} value={parseInt(sets||'')}/>
            <p>Relax(minuts):</p>
            <input type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setRelax(e.target.value)} value={parseInt(relax||'')}/>
            <button disabled={!eventChange()} onClick={()=>{handleClick(); setFn(false)}} className="save_setting">Save</button>
        </div>
    )
}