import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Deadlifts, getAverage, squats } from "../../additionalFunctions/calculation";
import { Close } from "../../UI/close/close";
import './calculator.css'
const back = require('./../../image/pointer.png')

export const Calculator: React.FunctionComponent = () => {

    const url = useNavigate()

    const [weight, setWeight] = useState<number>(10)
    const [count, setCount] = useState<number>(1)

    const [weightV1, setWeightV1] = useState<number>(10)
    const [countV1, setCountV1] = useState<number>(1)

    const [weightV2, setWeightV2] = useState<number>(10)
    const [countV2, setCountV2] = useState<number>(1)


    return (
        <div>
            <Close/>

            <div className="wrapper_calculate">
                <span>Bench press</span>
                <div className="form_input_block">
                    <div className="input_data">
                        <label>Weight, kg</label>
                        <input min="1" step="any" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))} value={weight} type="number" className="input number" />

                        <label>Number of repetitions</label>
                        <input min="1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value))} value={(count)} type="number" className="input number" />
                    </div>
                    <div className="result">
                        <p>Your maximum:</p>
                        <span>{getAverage(weight, count).toFixed(2)} kg</span>
                    </div>
                </div>
            </div>

            <div className="wrapper_calculate">
                <span>Back squats</span>
                <div className="form_input_block">
                    <div className="input_data">
                        <label>Weight, kg</label>
                        <input min="1" step="any" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeightV1(Number(e.target.value))} value={weightV1} type="number" className="input number" />

                        <label>Number of repetitions</label>
                        <input min="1" max="10" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountV1(Number(e.target.value))} value={(countV1)} type="number" className="input number" />
                    </div>
                    <div className="result">
                        <p>Your maximum:</p>
                        <span>{squats(weightV1, countV1).toFixed(2)} kg</span>
                    </div>
                </div>
            </div>

            <div className="wrapper_calculate">
                <span>Deadlifts</span>
                <div className="form_input_block">
                    <div className="input_data">
                        <label>Weight, kg</label>
                        <input min="1" step="any" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeightV2(Number(e.target.value))} value={weightV2} type="number" className="input number" />

                        <label>Number of repetitions</label>
                        <input min="1" max="10" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountV2(Number(e.target.value))} value={(countV2)} type="number" className="input number" />
                    </div>
                    <div className="result">
                        <p>Your maximum:</p>
                        <span>{Deadlifts(weightV2, countV2).toFixed(2)} kg</span>
                    </div>
                </div>
            </div>

        </div>

    )
}