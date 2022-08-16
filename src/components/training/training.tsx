import React, { useEffect } from "react";
import './training.css'
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ElemMini } from "./elemMini";
import { NoteElement } from "./noteElement";
import { calcTime } from "../../additionalFunctions/calcTime";
import { Close } from "../../UI/close/close";
import { useDispatch } from "react-redux";
import { TypeState } from "../../types";


export const Training: React.FunctionComponent = () => {
    const {movements, currentMv} = useTypedSelector(state => state)
    const url = useNavigate()
    const dispatch = useDispatch()

    function handleClick(){
        url('/workout/timer')
        let time:number = 0;
        currentMv.forEach(element=>{
        time +=(parseInt(element.relax)+1)*parseInt(element.approach)
        dispatch({type:TypeState.StateAddTime, payload:time})
        localStorage.setItem('Movements', JSON.stringify(currentMv))
    })
    }
 
    useEffect(()=>{
        if(movements.length == 0 && localStorage.getItem('ListMv')) {
            dispatch({type:TypeState.StateSuccess, payload:JSON.parse(localStorage.getItem('ListMv') || '')})
        }
    },[])

    return (
        <div className="training_menu">
            <Close/>
            <ul className="background_generator">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <div className="block_with_movements">
                    <div className="left_container_mv">
                        <div className="left_text">Select movements</div>
                        <div className="container_for_elements">
                            {movements.map((e,index)=>!e.currentList?<ElemMini key={index} data={e} />:null)}
                        </div>
                        
                    </div>
                    <div className="right_container_mv">
                        <div className="right_text">Training</div>
                        <div className="container_for_notes">
                        {currentMv.map((e,index)=> <NoteElement key={index} data={e} />)}
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} disabled={calcTime(currentMv) == '0 minuts'? true : false} className="start_training">
                    <span>Start</span>
                    <span className="funcTime">({calcTime(currentMv)})</span>
                </button>
                
            </ul>
        </div>

    )
}