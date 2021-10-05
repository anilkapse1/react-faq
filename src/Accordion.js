import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';


const Accordion=({id,question,ans})=>{

    const [show, setShow]=useState(false);

    const questionStyle={
        display:'flex',
        flexDirection:'row',
        marginBottom:'10px'
    }

    const ansStyle={
        marginBottom:'10px'
    }



    return(
        <React.Fragment>
            <div className="question" style={questionStyle}><span onClick={()=>setShow(!show)}>{show?<IndeterminateCheckBoxIcon/>:<AddBoxIcon/>}</span><h3>{question}</h3></div>
            {
                show &&  <div className="answer" style={ansStyle}><p>{ans}</p></div>
            }
           
        </React.Fragment>
    )
}

export default Accordion;