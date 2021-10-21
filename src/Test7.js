import React, { useState } from 'react';
import Keepnote from './Keepnote';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';





const Test7=()=>{
    const [open, setOpen]=useState(false);
    const [setData, setFullData] = useState([]);
    const [data, fullData] = useState({
        question:'',
        ans:''
    })

    const setVal=(e)=>{
        const {name, value}=e.target;
        fullData((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }


    const getVal=()=>{
        if(!Object.values(data).some(x => x ===null || x ==='')){
            setFullData((pre)=>{
                return [...pre,data];
            })
    
            fullData({
                question:'',
                ans:''
            });
            setOpen(true);
        }
        else{
            alert('please add the value');
            setOpen(false);

            return false;
        }
    }


    const handleClose=(event,reason)=>{
        console.log(reason);
        if(reason==='clickaway'){
            return; 
        }
        setOpen(false);
    }

    return (
      <React.Fragment>
        <form noValidate autoComplete="off" className="d-flex p-2 bd-highlight">
          <TextField
            className="m-3"
            id="standard-basic"
            label="Question"
            value={data.question}
            name="question"
            onChange={setVal}
          />
          <TextField
            className="m-3"
            id="standard-basic"
            label="Ans"
            value={data.ans}
            name="ans"
            onChange={setVal}
          />
          <Button
            className="m-3"
            variant="contained"
            color="primary"
            onClick={getVal}
          >
            Ask question
          </Button>
        </form>

        {setData.map((value, index) => {
          const { question, ans } = value;
          return (
            <Keepnote key={index} id={index} question={question} ans={ans} />
          );
        })}


        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="faq added successfully"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
}

export default Test7;