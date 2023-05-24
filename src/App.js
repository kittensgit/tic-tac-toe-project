import './App.css';
import { Board } from './components/Board';

function App() {
  const board = Array(9).fill('X')

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
