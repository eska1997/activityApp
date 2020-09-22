import React from 'react';
import './App.css';
import SideBar from './SideBar';
import Feed from './Feed';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <div className="App_body"> 
    <SideBar />
    <Feed />
    <Events />
    </div>
    </div>
  );
}

export default App;
