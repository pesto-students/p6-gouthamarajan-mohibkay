import { useState } from 'react';
import './App.css';
import LinkDisplay from './components/link-display';
import LinkInput from './components/link-input';

function App() {
  const [shortLinkData, setShortLinkData] = useState({});

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>shorturl</h1>
      </header>

      <main>
        <LinkInput setShortLinkData={setShortLinkData} />
        <LinkDisplay shortLinkData={shortLinkData} />
      </main>
    </div>
  );
}

export default App;
