import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <React.Fragment>
      <div className="card">
        <img src={props.imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.price}</p>
          <a href={props.link} className="btn btn-primary">link</a>
        </div>
      </div>
    </React.Fragment>
  );
}


export default Card;
