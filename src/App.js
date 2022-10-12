import './App.css';
import React, { useState } from 'react';
import Nav from './Nav';
import ToDoItem from './ToDoItem';
import pink from '../src/img/pink.jpg';

function App() {
  const [toggle, setToggle] = useState(false);
  let newDate = new Date();
  let date = `${newDate.getDate()}/${newDate.getMonth()}`;
  const [text, setText] = useState('');
  const [items, setItem] = useState([]);

  function newText(event) { 
    setText(event.target.value);
  }
  function newClick(preValue) { 
    setItem((preValue)=>[...preValue,text]);
    setText('');
  }
  function deleteItem(id) { 
    setItem(prevItems => { 
      return prevItems.filter((item,index) => { 
        return index !== id;
      })
    })
  }

  return (
    <div>
      <header className="header">
        <button className="header--button" id="btnNav" type="'button" onClick={()=>setToggle(!toggle)}>
            <i className="material-icons">menu</i>
        </button>

        <button className="header--button--home" type="button">
            <i className="material-icons">home</i>
        </button >
            
        <button className="header--button--add" type="button" >
            <i className="material-icons">add</i>
        </button>

        <form className='header--form' >
          <input type='text' id='text' placeholder='Search?'></input>
        </form>
      </header>

      {toggle && (<Nav />)}
      
      <main className='main'>
          <h2>Today</h2>
          <p>{date}</p>
        <div>
          <button className='main--button--add' onClick={newClick}>
              <i className='material-icons'>add</i>
          </button>
          <input className='form' type='text' value={text} onChange={newText} />
        </div>
        <div>
          <ul>
            {items.map((item, index) => (
              <ToDoItem
                text={item}
                key={index}
                id={index}
                onChecked={ deleteItem}
            />
            ))}
          </ul>
        </div>
      </main>
      <div>
        <img className='pink'
          src={pink} alt='background-img' />
      </div>

    </div>
  );
}

export default App;
