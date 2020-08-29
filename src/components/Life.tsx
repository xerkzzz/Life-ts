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
    // const [flag, setFlag] = useState(true)
    // console.log("123")

    function newNumbers() {
         // console.log('qwer')
        setNumber(JSON.parse(JSON.stringify(props.transform.getNumbers())))
        // setFlag(!flag)
    }

    // let intervalId;
    useEffect(() => {
        console.log("zx")
       let intervalId = setInterval(newNumbers, props.interval || 100); // устанавливаем интервал вызова метода tick
        return () => {clearInterval(intervalId)
            console.log("45")
        }; // передаем функцию clearInterval
    }, []) // parameter [] не дает вызывать данный метод при изменение состояния
    return <Matrix numbers={numbers}/>
}