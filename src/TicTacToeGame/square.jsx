import React from 'react';

const square = (props) =>{
    return(
        <div onClick={props.onClick} style={{border: '1px solid black', width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        className="square">
            <h3>{props.value}</h3>
        </div>
    );
};

export default square;