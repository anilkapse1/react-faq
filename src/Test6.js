import React, { useState } from 'react';
import Question from './Question';
import Accordion from './Accordion';

const Test6=()=>{



    const [Data, setData] = useState(Question);

    return(
        <React.Fragment>

            <div className="question_set">
                {
                    Data.map((value,index)=>{
                        return(
                            <Accordion key={index} {...value}/>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Test6;