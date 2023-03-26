import logo from './logo.svg';
import './App.css';
import Component1 from './name';
import Component2 from './profile';
import Component3 from './rank';
import Component4 from './vote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </header>
    </div>
  );
}

export default App;
