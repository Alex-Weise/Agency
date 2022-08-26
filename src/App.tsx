import './App.scss';
import { AboutUs } from './components/AboutUs';
import { OurComments } from './components/Comments';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { OurWork } from './components/OurWork';
import { WhatWeDo } from './components/WthaWeDo';

export const DEFAULT_TEXT = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.";
export const SHORT_TEXT = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <WhatWeDo />
        <AboutUs />
        <OurWork />
        <OurComments />
        <Contact />
      </main>
    </>
  );
}

export default App;
