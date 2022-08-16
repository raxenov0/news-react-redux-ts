import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMovement, TypeState } from "../../types";
import "./noteElement.css"
import { Window } from "./windowSetting/window";
const remove = require('./../../image/cancel.png')
const pen = require('./../../image/pen.png')

interface IStateElement{
    data:IMovement,
}

export const NoteElement:React.FunctionComponent<IStateElement> = ({data}) => {
    const dispath = useDispatch()
    const [visible, setVisible] = useState<boolean>(false)

    const {currentMv} = useTypedSelector(state=>state)
    
    
    function handleClick(){
            dispath({type:TypeState.StateRemove, payload: data})
            dispath({type:TypeState.StatePoint, payload:data})
    }

    function settingMv(){
        setVisible(true)
    }

    function mouseEnterListener(){
        const index = currentMv.findIndex(el=> el.name == data.name)
        document.querySelectorAll('.noteElement')[index]?.classList.add('enter')
    }
    function mouseLeaveListener(){
        const index = currentMv.findIndex(el=> el.name == data.name)
        document.querySelectorAll('.noteElement')[index]?.classList.remove('enter')
    }

    return(
        <div onMouseEnter={mouseEnterListener}  onMouseLeave={mouseLeaveListener} className="noteElement">
            {/* <div className="wrapper_for_names_mini"> */}
                <span className="index_movement">{currentMv.findIndex(el=> el.name == data.name)+1}.</span>
                <span className="">{data.name}</span>
                <img onClick={handleClick} src={remove} alt="" />
                <img onClick={settingMv} className="pen_note" src={pen} alt="" />
            {/* </div> */}
                {visible?<Window setFn={setVisible} data={data}/>:null}
        </div>
    )
}