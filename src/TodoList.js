import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap'

const TodoList=(props)=>{
        const [line, setLine] = useState(false);
        const cutImage=()=>{
            setLine(true);
        }

    return(
        <React.Fragment>
                <li onClick={cutImage} style={{textDecoration:line?"line-through":"none"}}>{props.text} <DeleteIcon  onClick={()=>{props.onSelect(props.id)}}/></li>
        </React.Fragment>
    )
}


export default TodoList;