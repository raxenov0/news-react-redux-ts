import React from "react";
import './close.css'
import { useNavigate } from "react-router-dom";

export const Close:React.FunctionComponent = () =>{
    const url = useNavigate()

    return(
        <button onClick={()=> url(-1)} className={window.location.pathname.split('/')[3]=='training'?"arrow left top":"arrow left"}>
                <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                    <polyline fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="
	                45.63,75.8 0.375,38.087 45.63,0.375 "/>
                </svg>
        </button>
    )
}