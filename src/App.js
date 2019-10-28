import React from 'react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App-header">
      <SiteHeader />
      <div style={{marginTop: 36, textAlign: 'center'}}>
        <SideNav />
      </div>
    </div>
  );
}

export default App;
