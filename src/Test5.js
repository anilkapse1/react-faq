import React, { useState } from 'react';
import reactDOM from 'react-dom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Clock from "react-digital-clock";
import Countdown from 'react-countdown';


const Test5=()=>{

    const [value,setValue]=useState(0);

    const addValue=()=>{
        setValue(()=>{
            return value+1;
        });
    }

    const subValue=()=>{
        setValue(()=>{
            return value-1;
        });
    }

    const Completionist = () => <span>You are good to go!</span>;
    
    return(
        <React.Fragment> 
            <h1>{value}</h1>
            <Clock/>
            <Countdown date={Date.now() + 10000} >
            <Completionist />
            </Countdown>
            
            <Button variant="contained" onClick={addValue}><AddIcon/></Button>
            <Button variant="contained" onClick={subValue}><RemoveIcon/></Button>
        </React.Fragment>
    )
}

export default Test5;