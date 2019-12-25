import React from 'react';
import './App.css';
import Header from './Header/_Header'
import Panel from './Panel/_Panel'
import Content from './Content/_Content'

function App(props) {
    // props.demo("hey there!!!!");
  return (
    <div className="App">
        <Header />
        <Panel />
        <Content />
    </div>
  );
}

export default App;
