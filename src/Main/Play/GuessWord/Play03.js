import React from 'react'

const Play03=(props)=> {
    const st = {
        display: "inline-block",
        marginTop: "10px",
        margin: "10px",
        width: "300px",
        padding: "20px",
        border: "1px solid #eee",
        boxShadow: "0 2px 2px rgb(146, 140, 140)",
        height: "auto",
        backgroundColor: "#eee"

    }
    return (
        <div style={st}>
        <h1>Hint:{props.add}</h1>
    </div>
    )
}
export default Play03;