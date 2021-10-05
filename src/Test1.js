import React from 'react';
import sData from './Data';
import Card from './Cards';

function Test1() {
  let choice = "laptop";
  const callFun= () =>{
    if(choice==="laptkop"){
      return(  
      <Card
        key={sData[0].id}
        imgSrc={sData[0].img}
        title={sData[0].title}
        price={sData[0].price}
        link={sData[0].link}
      />);
    }
    else{
      return(
        <Card
          key={sData[0].id}
          imgSrc={sData[1].img}
          title={sData[1].title}
          price={sData[1].price}
          link={sData[1].link}
        />
      );
    }
  }

  return (
    <React.Fragment>
      <div className="container">
       {callFun()}
      </div>
    </React.Fragment>
  );
}


export default Test1;
