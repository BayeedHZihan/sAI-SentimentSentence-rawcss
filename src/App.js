import React from 'react';
import Sidebar from './Sidebar'
import Desc from './Desc'
import SentenceForm from './SentenceForm'
import './AppStyle.css'


function App() {
  return (
    <div className="App">
      <div className="container-1">
        <div className="ver-box-1">
          <Sidebar/>
        </div>
        <div className="ver-box-2">
          <div className="hor-box-1">
            <Desc/>
          </div>
          <br/><br/><br/>
          <div className="hor-box-2">
            <SentenceForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
