import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMovement, TypeState } from "../../types";
import './timer.css'

const boopSfx = require('./../../sound/sound.mp3');

interface ITimer {
    data: IMovement,
    setData: any
}
export const Timer: React.FunctionComponent<ITimer> = ({ data, setData }) => {

    const [play] = useSound(boopSfx);
    const url = useNavigate()

    const { currentMv } = useTypedSelector(state => state)
    const dispatch = useDispatch()

    let hours: number = 0
    let minutes: number = 1
    let seconds: number = 0;

    const [paused, setPaused] = useState<boolean>(false);
    const [[h, m, s], setTime] = useState<number[]>([hours, minutes, seconds]);
    const [training, setTraining] = useState<boolean>(true)
    const [end, setEnd] = useState<boolean>(false)


    function handleClick() {
        if (end) url('/')
    }
    const tick = (): void => {

        if (paused || end) {
            return;
        }
        if (h === 0 && m === 0 && s === 0) {

            setTraining(!training)
            if (!training) {
                dispatch({ type: TypeState.StatePopCurrMV })
                localStorage.setItem("Movements", JSON.stringify(currentMv))
                setTime([hours, minutes, seconds])
            }

            else setTime([0, parseInt(data.relax), 0])
            setData(currentMv[0])
            play()
        }
        else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    function stop_timer() {
        if (!data && currentMv.length == 0 && (JSON.parse(localStorage.getItem('Movements') || '')?.length == 0)) {
            setEnd(true);
            setTime([0, 0, 0])
            localStorage.removeItem('selectProgram')
        }
    }


    useEffect(() => {
        if (localStorage.getItem("Movements") && JSON.parse(localStorage.getItem("Movements") || '').length !== currentMv.length) {
            dispatch({ type: TypeState.StateResetCurrMV, payload: JSON.parse(localStorage.getItem("Movements") || '') })
            setData(JSON.parse(localStorage.getItem("Movements") || '')[0])
        }
    }, [])

    useEffect(() => {
        stop_timer()
    }, [s])

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, [h, m, s, paused, end])

    return (
        <div className="wrapper_training_time">
            <div className="controlls">
                <div className="display-remain-time">
                    <div className="hours">{`${h.toString().padStart(2, '0')}`}</div>:
                    <div className="minuts">{`${m.toString().padStart(2, '0')}`}</div>:
                    <div className="seconds">{`${s.toString().padStart(2, '0')}`}</div>
                </div>
                <div className="display-remain-time-btn">
                    <div className="hours">HOURS</div>
                    <div className="hours">MINUTS</div>
                    <div className="hours">SECONDS</div>
                </div>


            </div>
            <div className="set_for_timer">
                <button onClick={() => setPaused(!paused)} className="display-time-button"> {paused ? 'RESUME' : 'PAUSE'}</button>
                <button onClick={() => setTime([0, 0, 0])}
                    className="display-time-button-skip-next"> {training ? 'Next' : 'Skip relax'}</button>
            </div>

            <div onClick={handleClick} style={{ backgroundColor: training ? 'red' : 'green', cursor: end ? 'pointer' : '' }} className="type-movements">{(training && end) ? ("Close") : (training ? "Training!" : "Relax!")}</div>
        </div>

    )
}