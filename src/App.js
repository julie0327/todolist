import './App.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Nav from './Nav';
import ToDoItem from './ToDoItem';
import pink from '../src/img/pink.jpg';
Modal.setAppElement('#root')



function App() {
  const [toggle, setToggle] = useState(false);
  let newDate = new Date();
  let date = `${newDate.getDate()}/${newDate.getMonth()}`;
  const [text, setText] = useState('');
  const [items, setItem] = useState([]);
  const [modal, setModal] = useState(true);

  function newText(event) {
    setText(event.target.value);
  }
  function newClick(preValue) {
    setItem((preValue) => [...preValue, text]);
    setText('');
  }
  function deleteItem(id) {
    setItem(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }
  function closeModal() {
    setModal(false)
  }
  useEffect(() => { closeModal() }, [items])// submit and close the modal





  return (
    <div>
      <header className="header">
        <button className="header--button" id="btnNav" type="'button" onClick={() => setToggle(!toggle)}>
          <i className="material-icons">menu</i>
        </button>

        <button className="header--button--home" type="button">
          <i className="material-icons">home</i>
        </button >

        <button className="header--button--add" type="button" onClick={() => setModal(true)}>
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
          <button className='main--button--add' onClick={() => setModal(true)}>
            <i className='material-icons'>add</i>
          </button>
          <Modal isOpen={modal} >
            <input className='form' type='text' value={text} onChange={newText} />
            <button className='modal--button-close' onClick={() => setModal(false)}>
              <i className='material-icons'>close</i>
            </button>
            <button className='model--button--done' onClick={newClick} >
              <i className='material-icons'>done</i>
            </button>

          </Modal>

        </div>
        <div>
          <ul>
            {items.map((item, index) => (
              <ToDoItem
                text={item}
                key={index}
                id={index}
                onChecked={deleteItem}
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
