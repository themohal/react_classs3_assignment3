import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {App,Mediacard,Gate} from './App';
import { Button } from './components/button';

ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  
  <div><App name="Muhammad Farjad Ali Raza"/>
  <div><Mediacard title="Mediacard" body="React Image is loaded below" ImageUrl="https://media.giphy.com/media/26tPtg8M3i6DPSSt2/giphy.gif"/></div>
  <div ><Gate isOpen={true}/>
  <Button className=".btn" onClick={() => {
          window.open('http://google.com.pk',"_blank");
        }}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--small">
        Click me to visit Google.com
      </Button>
  </div>
  
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
