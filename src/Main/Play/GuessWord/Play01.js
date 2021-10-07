import React from 'react'

const Play01 = (props) => {
    return (
        <div>
            <label>Enter the String:</label>
            <input type="text" onChange={props.change} value={props.value}></input>
        </div>
    )
}
export default Play01;

//Should be deleted