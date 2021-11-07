import React from "react";
import style from "./Counter.module.css";
import Card from "../UI/CardCounter/Card";
import useCounter from "../hooks/use-counter";
const CounterUp = (props) => {
    const contador = useCounter(true);
    return (
        <Card className={style.CounterUp}>
            {contador}
        </Card>
    );
};

export default CounterUp;