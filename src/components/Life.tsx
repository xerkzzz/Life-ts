import React, {useEffect, useState} from "react";
// import {getRandomMatrix} from "../util/random";
// import {N_COLUMNS, N_ROWS} from "../config/config";
// import TransformNumbers from "../services/TransformNumbers";
import Matrix from "./Matrix";
import TransformNumbers from "../services/TransformNumbers";
interface Props
{
    transform:TransformNumbers
    interval?: number
}
export const Life = (props: Props) => {
    const [numbers, setNumber] = useState(props.transform.getNumbers());

    function newNumbers() {
        setNumber(JSON.parse(JSON.stringify(props.transform.getNumbers())))
    }

    useEffect(() => {
       let intervalId = setInterval(newNumbers, props.interval || 1000); // устанавливаем интервал вызова метода tick
        return () => {clearInterval(intervalId)}; // передаем функцию clearInterval
    }, []) // parameter [] не дает вызывать данный метод при изменение состояния
    return <Matrix numbers={numbers}/>
}