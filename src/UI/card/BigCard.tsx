import React from "react";
import { IMovement } from "../../types";
import "./card.css"

interface IStateElement {
    data: IMovement
}

export const BigCard: React.FunctionComponent<IStateElement> = ({ data }) => {
    if(data){ 
    return (
        <div className="element_wrapp_big">
            <div className="wrapper_for_names">
                <span className="name_movements">{data?.name}</span>
            </div>
            <div className="main_info_for_training">
                <img src={data?.url} alt="" />
                <div className="block_info">
                    <div>
                        {data?.info}
                    </div>
                </div>
            </div>
        </div>
    )} else return(
        <div></div>
    )
}