// App.js

import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import GothicScene from './GothicScene';
import RoomScene from './RoomScene';
import { Button, Navbar,Container } from 'react-bootstrap';
import "./App.css"

function App() {
  const [change, setChange] = useState(1); // Initializing state with a value of 1

  const nextScene = () => {
    setChange(change + 1); // Update the change state to the next value
  };

  const previousScene = () => {
    setChange(change - 1); // Update the change state to the previous value
  };

  return (
    <div id="root" style={{height: '100vh', width: '100%', overflow: 'hidden'}}>
      <div className="Navbar">
        <button style={{marginRight: '10em'}} onClick={previousScene}>Previous</button>
        <button style={{marginLeft: '10em'}} onClick={nextScene}>Next</button>
      </div>
      <div className='row'>
        <hr className="hr" />
      </div>

      {change === 1 && <GothicScene />}
      {change === 2 && <RoomScene />}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

export default App;
