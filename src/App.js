import './App.css';
import Input from './components/Input'
import React from 'react'
import ReactDOM from 'react-dom';

function App() {

  const hoverStyle = {
    pointer: 'cursor'
  };

  return (
    <div className="">
    <h1 className='text-6xl font-bold text-center'>User database</h1>
     <Input/>
    </div>
  );
}

export default App;
