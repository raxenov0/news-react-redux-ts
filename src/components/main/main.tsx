import React from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
const first = require('./../../image/1.png')
const second = require('./../../image/2.png')
const threen = require('./../../image/3.png')
const muscles = require('./../../image/4.png')


export const Main: React.FunctionComponent = () => {
    const url = useNavigate()
    
    function handleClick1(){url('/workout/SlimDown')}
    function handleClick2(){url('/workout/Muscles')}
    function handleClick3(){url('/workout/Relief')}
    function handleClick4(){url('/workout/Calculator')}

    return (
        <div className="wrapper">
            <div className="main_content">
                <div className="background">
                    <div className="text_onBackground">Training for men</div>
                </div>
                <div className="content">
                    <div className="select_text">Select program training:</div>
                    <div className="class_training">
                        
                        <div onClick={handleClick1} className="slim_down">
                            <span>Slim down</span>
                            <img src={first} alt="" />
                        </div>

                        <div onClick={handleClick2} className="Build_up_muscles">
                            <span>Build up muscles</span>
                            <img src={second} alt="" />
                        </div>

                        <div onClick={handleClick3} className="Relief">
                            <span>Relief</span>
                            <img src={threen} alt="" />
                        </div>
                    </div>


                    
                    <div className="select_text_2">Find out your maximum:</div>
                    <div onClick={handleClick4} className="class_culculator">
                        <span>Calculator of power</span>
                        <img src={muscles} alt="" />
                    </div>

                    
             
                </div>
            </div>
        </div>

    )
}