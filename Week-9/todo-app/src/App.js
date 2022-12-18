import './App.css';
import Todos from './components/todos';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className=''>Todo App</h1>
      </header>
      <Todos />
    </div>
  );
}

export default App;
