import './App.css';
import LinkInput from './components/link-input';

function App() {
  // fetch(
  //   'https://api.shrtco.de/v2/shorten?url=https://github.com/pesto-students/p6-gouthamarajan-mohibkay/pull/9'
  // ).then((data) => console.log(data.json()));

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>shorturl</h1>
      </header>

      <main>
        <LinkInput />
      </main>
    </div>
  );
}

export default App;
