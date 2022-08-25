import './App.scss';
import { AboutUs } from './components/AboutUs';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { WhatWeDo } from './components/WthaWeDo';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <WhatWeDo />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
