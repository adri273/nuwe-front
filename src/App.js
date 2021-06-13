import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import FormPanel from './components/FormPanel/FormPanel';
import RegistroProvider from './context/Registro/RegistroContext';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='app'>
      <InfoPanel />
      <RegistroProvider>
        <FormPanel />
      </RegistroProvider>
    </div>
  );
}

export default App;
