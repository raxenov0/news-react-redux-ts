import React from "react";
import { useDispatch } from "react-redux";
import { IMovement, TypeState } from "../../types";
import "./elemMini.css"
const star = require('./../../image/star.png')

interface IStateElement{
    data:IMovement
}

export const ElemMini:React.FunctionComponent<IStateElement> = ({data}) => {
    const dispath = useDispatch()
    
    function handleClick(){
            dispath({type:TypeState.StatePoint, payload:data})
            dispath({type:TypeState.StateAdd, payload:data})
        }

    return(
        <div onClick={handleClick} className="element_wrapp_mini">
            <div className="wrapper_for_names_mini">
                <span className="name_movements_mini">{data.name}</span>
            </div>
            
            <img src={data.url} alt="" />
           
        </div>
    )
}