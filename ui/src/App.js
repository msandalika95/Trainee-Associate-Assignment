import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import './cssFiles/LoginWindow.css';
import LoginWindow from './pages/LoginWindow.jsx'



function App() {
  return (
   <React.Fragment>
    
       <Switch>
          <Route exact path = "/" component = {LoginWindow}/>

       </Switch>
   </React.Fragment>
    
  );
}

export default App;

