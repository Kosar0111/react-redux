import React, { useState } from 'react';
import Form from './componets/Form/Form';
import './app.css';
import Sort from './componets/Sort/Sort';
import List from './componets/List/List'

function App() {
  const [start, setStart] = useState(true)
  const toggle = (start) => setStart(!start)

  return (
    <div className='all-app'>
      <div className={start ? 'add-btn' : 'add-btn-done'}>
        <button onClick={toggle} className='add-themes'> Add themes</button>
      </div>
      <div className={start ? "content" : 'content-done'} >
        <div className='sort-main'>
          <Sort />
        </div>
        <div className='main'>
          <div className='content-list'>
            <List />
          </div>
          <div className='content-form'>
            <Form />
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
