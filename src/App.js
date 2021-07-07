import logo from './logo.svg';
import './App.css';


import {UsersF} from "./components/users-fetch/UsersF";
import {UsersAx} from "./components/users-fetch/UsersAx";

function App() {
  return (
    <div className="App">
      <UsersF/>
        <UsersAx/>
    </div>
  );
}

export default App;
