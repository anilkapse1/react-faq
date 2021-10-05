import React, { useState } from 'react';
import TodoList from './TodoList';

const Test4=()=>{
    const [inputList, setList]=useState("");
    const [items, setItems] = useState([]);

    const addList=(e)=>{
        const {value}= e.target;
        console.log(value);
        setList(value);
    }

    const addValue=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })
        setList("");
    }

    const deleteItem=(id)=>{
        setItems((oldvalue)=>{
            return oldvalue.filter((arrEl, index)=>{
                return index!==id;
            })
        })
    }

    return(
        <React.Fragment> 
            <h1>Todo list</h1>
            <br/>
            <input type="text" name="list" value={inputList} onChange={addList}/>
            <button onClick={addValue}>+</button>
            <ol>
                {
                    items.map((itemVal,index)=>{
                        return (<TodoList 
                        key={index} 
                        id={index} 
                        text={itemVal}
                        onSelect={deleteItem}    
                        />)
                    })
                }
            </ol>
        </React.Fragment>
    )
}

export default Test4;