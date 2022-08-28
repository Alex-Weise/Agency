import { useEffect, useState } from 'react';
import './App.scss';
import top from "./assets/link/top.svg";
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
  const [isScroll, setScroll] = useState(false);

  useEffect( () => {
    const scrollShow = () => {
      const scroll = Math.ceil(window.scrollY);
      scroll > 350 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", scrollShow);
    return () => {
      window.removeEventListener("scroll", scrollShow)
    }
  }, [setScroll])

  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <main>
        <button className={isScroll ? "button_up" : "close"} type="button" onClick={goUp}><img src={top} alt="Top" className="top"/></button>
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
