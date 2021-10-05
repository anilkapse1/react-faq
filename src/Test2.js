import React, { useState } from 'react';

const Test2=()=> {
    const dateTime = new Date().toLocaleTimeString();
    const [count, setCount] = useState(dateTime);

    const incTime = ()=>{
        const dateTime = new Date().toLocaleTimeString();
        setCount(dateTime);
    }
    
    setInterval(incTime,1000);

    return (
        <React.Fragment>
            <h1>{count}</h1>
        </React.Fragment>
    );
}


export default Test2;
