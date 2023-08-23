import React, { useState } from 'react';

import './App.css';

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  const addNewTransaction = (event) => {
    event.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, datetime, description })
    }).then(response => {
      response.json()
        .then(json => {
          console.log('result:', json);
        })
    })
  };

  return (
    <main>
      <h1>$400<span>.00</span></h1>

      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder={'+200 new sansumg tv'}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={event => setDatetime(event.target.value)}
          />
        </div>
        <div className='description'>
          <input
            type="text"
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder={'description'} />
        </div>
        <button type='submit'>Add new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Samsung TV</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-08-22 13:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2023-08-22 13:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">IPhone</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2023-08-22 13:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
