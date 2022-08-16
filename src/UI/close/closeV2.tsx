import React from "react";
import { useNavigate } from "react-router-dom";
import './close.css'

export const CloseV2:React.FunctionComponent = () => {
    const url = useNavigate()
    return(
        <span onClick={()=>url(-1)} className="arrowV2 left-type"></span>
    )
}