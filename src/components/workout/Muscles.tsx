import React, { useEffect } from "react";
import './page.css'
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { Card } from "../../UI/card/card";
import { Loader } from "../../UI/loader/loader";
import { useDispatch } from "react-redux";
import { TypeState } from "../../types";

export const Muscles: React.FunctionComponent = () => {

    const { getMyGroups } = useAction()
    const { movements, loading} = useTypedSelector(state => state)
    const dispatch = useDispatch()

    function handleClick(){
        localStorage.setItem('ListMv', JSON.stringify(movements))
        url('training')
    }

    useEffect(() => {
        getMyGroups()
        localStorage.setItem('ListMv', JSON.stringify(movements))
        localStorage.removeItem('Movements')
        dispatch({type:TypeState.StateDeleteArrCurMV})
    }, [])

    const url = useNavigate()

    return (
        <div className="BoardWrapp">
            <div className="left_part_muscle">

            <button onClick={() => url(-1)} className="arrow arrow2 left">
                    <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                        <polyline fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
	                        45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>
                </button>

                <button disabled={loading?true:false} onClick={handleClick} className="go_training">
                    Go training!
                </button>

            </div>
            {
                loading?
                <Loader/>
                :
                <div className="right_part">
                    {movements.map((element, index)=><Card data={element} key={index}/>)}
                </div>
            }
            

        </div>
    )
}