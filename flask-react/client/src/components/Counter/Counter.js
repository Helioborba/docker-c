import React from "react";
import style from "./Counter.module.css";
import CounterDown from "./CounterDown";
import CounterUp from "./CounterUp";

const Counter = (props) => {

    return (
        <div className={style.Counter}>
            <CounterUp/>
            <p>-- Meio --</p>
            <CounterDown/>
        </div>
    )
}

export default Counter;