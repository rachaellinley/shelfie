import React from 'react';
import axios from "axios";
import './reset.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";


class App extends React.Component {
  constructor(){
      super();

  }
  

  render(){
      return(
          <div className="App">
              <Header />
              <div className="box-1">
              <Dashboard/>
              <Form />
              </div>
          </div>
      )
  }
}

export default App;