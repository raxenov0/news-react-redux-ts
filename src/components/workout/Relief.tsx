import React, { useEffect } from "react";
import './page.css'
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { Card } from "../../UI/card/card";
import { Loader } from "../../UI/loader/loader";

export const Relief: React.FunctionComponent = () => {

    const { getMyGroups } = useAction()
    const { movements, loading } = useTypedSelector(state => state)

    useEffect(() => {
        getMyGroups()
    }, [])

    const url = useNavigate()

    function handleClick(){
        localStorage.setItem('ListMv', JSON.stringify(movements))
        url('training')
    }


    return (
        <div className="BoardWrapp">
            <div className="left_part_relief">

            <button onClick={() => url(-1)} className="arrow arrow2 left">
                    <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                        <polyline fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
	                        45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>
                </button>

                <button onClick={handleClick} className="go_training">
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