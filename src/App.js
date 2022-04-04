import logo from './logo.svg';
import './App.css';
import {TitleContainer, Input} from './components.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleContainer />
        <img src="http://dept.harpercollege.edu/biology/guide/gallery/evidence/scat/original/Bird_Berry_Scat.jpg" className ='flex rounded-lg mb-10'alt="poop" ></img> {/* replace this with a something that changes the picture everyday*/}
        <Input />
      </header>
    </div>
  );
}


export default App;
