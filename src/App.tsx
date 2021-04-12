import React from 'react';

import api from './api';

function App() {

  function handle() {
    api.get('/auth').then(respose => {
      console.log(respose);
    }).catch(response => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <button onClick={handle}>
        Click to oAuth
      </button>
    </div>
  );
}

export default App;
