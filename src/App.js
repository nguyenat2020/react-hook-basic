import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';

function App() {
  let obj = {name : 'Ares7760', year: 2023};
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=10';

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {obj.name} in {obj.year}!</h1>
        <p>{JSON.stringify(obj)}</p>
        <a href={link} target="_blank">Visit Hoi Dan IT channel</a>
      </header>
    </div>
  );
}

export default App;
