import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Form from './componets/Form/Form';
import './app.css';
import Sort from './componets/Sort/Sort';
import List from './componets/List/List'

function App() {
  const [start, setStart] = useState(true)
  const themes = useSelector(state => state.themes.lists);
  const [visibleForm, setVisibleForm] = useState(false)

  const hiddenForm = visibleForm => setVisibleForm(!visibleForm)
  const toggle = start => setStart(!start)

  return (
    <div className='all-app'>
      <div className={start ? 'add-btn' : 'add-btn-done'}>
        <button onClick={toggle} className='add-themes'> Add themes</button>
      </div>
      <div className={start ? "content" : 'content-done'} >
        <div className={themes.length >= 2 ? 'sort-main' : 'sort-main-hiden'} >
          <Sort />
        </div>
        <div className='main'>
          <div className='content-list'>
            <List
              hiddenForm={hiddenForm} />
          </div>
          <div className='content-form'>
            <Form
              hiddenForm={hiddenForm}
              visibleForm={visibleForm}
            />
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
