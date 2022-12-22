import { useState } from 'react';
import './App.css';
import LinkDisplay from './components/link-display';
import LinkInput from './components/link-input';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Hero from './components/hero-section';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [shortLinkData, setShortLinkData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isShortLinkReady = Object.keys(shortLinkData).length;

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <main className='main'>
        <LinkInput
          setShortLinkData={setShortLinkData}
          setIsLoading={setIsLoading}
        />

        {isLoading ? (
          <Skeleton height={103} />
        ) : isShortLinkReady ? (
          <LinkDisplay shortLinkData={shortLinkData} />
        ) : null}
      </main>

      <Footer />
    </div>
  );
}

export default App;
