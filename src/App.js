import logo from './logo.svg';
import './App.css';

import Villager from './components/Villager';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Villager type="base" />
        </div>
        <div>
          <Table type="none" />
        </div>
      </div>
    </div>
  );
}

export default App;
