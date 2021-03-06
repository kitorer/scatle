import './App.css';

import { Input } from './components/mainBody.js';
import {TitleContainer} from './components/components.js';
import { useState } from 'react';

function App() {
  const [mode, SetMode] = useState(0);

  return (
    
    <div className="App">
      <header className="App-header">
        {/*this body is supposed to change for date*/}
        {/*if the state changes to game over then display that screen*/}
        <body>
          <div className='justify-between'>
            <TitleContainer />
            <Input />
          </div>
          
        </body>
      </header>
    </div>
  );
}


export default App;
