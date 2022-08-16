import React from "react";
import { IMovement } from "../../types";
import "./card.css"
const star = require('./../../image/star.png')

interface IStateElement{
    data:IMovement
}

export const Card:React.FunctionComponent<IStateElement> = ({data}) => {
    
    return(
        <div className="element_wrapp">
            <div className="wrapper_for_names">
                <span className="name_movements">{data?.name}</span>
            </div>
            
            <img src={data?.url} alt="" />
            <div className="block_info">
                <span>sets: {data?.approach}</span>

                <div className="lvl">
                    <span>{data?.lvl}</span>
                    <img src={star} alt="" />
                </div>

                <span>Relax: {data?.relax} minuts</span>

            </div>
        </div>
    )
}