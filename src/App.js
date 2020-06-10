import React from 'react';
import './hello.css';

function App(props) {
  return(
    <div className="helloWorld">
     <h1>Hello World</h1><strong>{props.name}!</strong>
     <p>This is Assignment 3 </p>
    
    <div className="list">
      <ol><h2>List of All Fruits</h2>
       <li>Apple</li>
       <li>Banana</li>
       <li>PineApple</li>
       <li>Orange</li>
     </ol>
    </div>
    <div className="unorderlist">
      <ul> <h3>PIAIC Courses</h3>
        <li>Artificial Intelligence</li>
        <li>Cloud Native Computing</li>
        <li>Internet Of Things</li>
        <li>BlockChain</li>
      </ul>
    </div>
    </div>
  );
  
}

function Mediacard(props){
  return <div className="centerMediaCard">
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <img src={props.ImageUrl} alt=""/>
  </div>
}

export  {App,Mediacard}