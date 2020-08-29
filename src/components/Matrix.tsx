import React from 'react'
import Row from "./Row";

interface Props
{
    numbers: Array<Array<number>>
}
export default function Matrix(props:Props) {
    function getRows() {
        return props.numbers.map((r, index) => <Row key = {index} row = {r}/>)
    }

    return <div style={{
        "display": "flex",
        "flexDirection": "column"
    }}>
        {getRows()}
    </div>
}
