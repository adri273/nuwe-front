import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import FormPanel from './components/FormPanel/FormPanel';

function App() {
  return (
    <div className='app'>
      <InfoPanel />
      <FormPanel />
    </div>
  );
}

export default App;
