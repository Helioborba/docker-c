import {useState,useEffect} from "react";

const useCounter = (contadorModoUp = true) => {
    const [contador,setContador] = useState(0);

    useEffect( () => {
        const interval = setInterval( () => {
            if (contadorModoUp) {
                setContador((prevNumero) => { return prevNumero + 1});
            } else {
                setContador((prevNumero) => { return prevNumero - 1});
            };
        },100);

        return () => {clearInterval(interval)};
    },[contadorModoUp]);

    // custom hook returns..
    return contador;
}

export default useCounter;