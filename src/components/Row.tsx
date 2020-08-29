import React from 'react'
import {N_COLUMNS} from "../config/config";

function getSize(): number
{
    return Math.min(window.innerHeight, window.innerWidth) / N_COLUMNS - 2;
}

function getStyle(number: number)
{
    return {
        "backgroundColor": number === 1 ? "black" : "white",
        "border": "solid 1px gray", "width": getSize(), "height": getSize()
    };
}

interface Props
{
    row: Array<number>
}

export default function Row(props: Props)
{
    function getGrids() {
        return props.row.map((number, index) => <div key={index} style={getStyle(number)}/>)
    }

    return (
        <div style={{"display": "flex", "flexDirection": "row"}}>
            {getGrids()}
        </div>
    )
}
