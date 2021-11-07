import React from "react";
import style from "./Counter.module.css";
import Card from "../UI/CardCounter/Card";
import useCounter from "../hooks/use-counter";
const CounterDown = (props) => {
    const contador = useCounter(false);
    return (
        <Card className={style.CounterDown}>
            {contador}
        </Card>
    );
};

export default CounterDown;