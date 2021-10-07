import React from 'react';

const Play02=(props)=> {
    const st ={
        display:"inline-block",
        margin:"20px",
        padding:"20px",
        border:"1px solid",
        textAlign:"center"
    }
    return (
        <div style={st} onClick={props.click}>
           <h3>{props.put}</h3>
        </div>
    )
}
export default Play02;