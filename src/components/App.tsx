import './App.scss';
import { Header } from './Header';
import { Home } from './Home';
import { WhatWeDo } from './WthaWeDo';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <WhatWeDo />
      </main>
    </>
  );
}

export default App;
