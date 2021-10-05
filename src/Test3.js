import React, { useState } from 'react';

const Test3=()=> {
    const [fullName,setFullName]=useState({
        fname:'',
        lname:'',
    });

    const onSubmit=(e)=>{
        e.preventDefault();
    }

    const inputEvent=(e)=>{
        const {name, value} = e.target;
        setFullName((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
       
        })
    }
    
    return (
        <React.Fragment>
            <h1>hello,{fullName.fname} {fullName.lname}</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="fname" value={fullName.fname} placeholder="enter your name" onChange={inputEvent} />
                <input type="text" name="lname" value={fullName.lname} placeholder="enter your surname" onChange={inputEvent} />
            </form>
        </React.Fragment>
    );
}


export default Test3;
