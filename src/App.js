import logo from './logo.svg';
import './App.css';
import {TitleContainer, Input} from './components/components.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleContainer />
        {/*this body is supposed to change for date*/}
        <body>
          <img src="http://dept.harpercollege.edu/biology/guide/gallery/evidence/scat/original/Bird_Berry_Scat.jpg" className ='flex rounded-lg mb-10'alt="poop" ></img> {/* replace this with a something that changes the picture everyday*/}
          <Input />
        </body>
      </header>
    </div>
  );
}


export default App;
