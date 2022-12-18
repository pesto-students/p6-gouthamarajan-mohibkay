import './App.css';
import Todos from './components/todos';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Todo App</h1>
        <Todos />
      </header>
    </div>
  );
}

export default App;
