import { useState } from 'react';
import './App.css';
import LinkDisplay from './components/link-display';
import LinkInput from './components/link-input';

function App() {
  const [shortLinkData, setShortLinkData] = useState({});
  const isShortLinkRequested = Object.keys(shortLinkData).length;

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>shorturl</h1>
      </header>

      <main>
        <LinkInput setShortLinkData={setShortLinkData} />
        {isShortLinkRequested ? (
          <LinkDisplay shortLinkData={shortLinkData} />
        ) : null}
      </main>
    </div>
  );
}

export default App;
