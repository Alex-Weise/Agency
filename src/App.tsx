import './App.scss';
import { AboutUs } from './components/AboutUs';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { OurWork } from './components/OurWork';
import { WhatWeDo } from './components/WthaWeDo';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <WhatWeDo />
        <AboutUs />
        <OurWork />
      </main>
    </>
  );
}

export default App;
