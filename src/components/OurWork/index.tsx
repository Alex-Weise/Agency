import { useState } from "react";
import styles from "./styles.module.scss";
import web1 from "../../assets/cards/card1-1.png";
import mob1 from "../../assets/cards/card1-2.png";
import web2 from "../../assets/cards/card2-1.png";
import mob2 from "../../assets/cards/card2-2.png";
import web3 from "../../assets/cards/card3.png";
import right from "../../assets/link/right.svg";
import left from "../../assets/link/left.svg";
import { DEFAULT_TEXT } from "../../App";


const OurWork = () => {
    const [count, setCount] = useState(20);

    const disableButton = ():Object => {
        return {pointerEvents: "none",
                opacity: "0.5"};
    }

    const goNext = () => {
        const width = window.screen.width;
        const cards = document.getElementById("cards2");
        if (cards && count <= 100 ) {
            setCount(prev => prev + 20);
            if (width > 1180) {
                cards.style.cssText = `transform: translate(${22 - count}%, 0)`;
            } else if (width <= 576 && width > 400) {
                cards.style.cssText = `transform: translate(${22 - (count * 1.2)}%, 0)`;
            } else if (width <= 400) {
                cards.style.cssText = `transform: translate(${22 - (count * 1.7)}%, 0)`;
            } else {cards.style.cssText = `transform: translate(${22 - (count * 1.4)}%, 0)`;}
        } 
    }

    const goBack = () => {
        const width = window.screen.width;
        const cards = document.getElementById("cards2");
        if (cards && count > 20) {
            setCount(prev => prev - 20);
            if (width > 1180) {cards.style.cssText = `transform: translate(${(140 - count) - 78}%, 0)`;
            } else if (width <= 576 && width > 400) {
                cards.style.cssText = `transform: translate(${((140 - count) * 1.2) - 98}%, 0)`;
            } else if (width <= 400) {
                cards.style.cssText = `transform: translate(${((140 - count) * 1.7) - 148}%, 0)`;
            } else {cards.style.cssText = `transform: translate(${((140 - count) * 1.4) - 118}%, 0)`;}
        }
    }

    return (
        <section className={styles.wrapper} id="Services">
            <div className={styles.pink} />
            <div className={styles.container_text}>
                <div className={styles.title}>
                    <p className={styles.title1}>Our Recent Work</p>
                    <p className={styles.title2}>By Our <span>Experts</span></p>
                </div>
                <p className={styles.text}>
                    {DEFAULT_TEXT}
                </p>
            </div>
            <div className={styles.cards} id="cards2">
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={web1} className={styles.img1} alt="Page 1" />
                        <img src={mob1} className={styles.img2} alt="Mobile 1" />
                    </div>
                    <div className={styles.discribe}>
                        <h5>UI Soup</h5>
                        <button className={styles.view} type="button">View Work</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <div className={styles.image}>
                        <img src={web2} className={styles.img1} alt="Page 2" />
                        <img src={mob2} className={styles.img2} alt="Mobile 2" />
                    </div>
                    <div className={styles.discribe}>
                        <h5>Goldcrown Labs</h5>
                        <button className={styles.view} type="button">View Work</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={web3} className={styles.img1} alt="Page 3" />
                        <img src={mob2} className={styles.img2} alt="Mobile 3" />
                    </div>
                    <div className={styles.discribe}>
                        <h5>Close Concierge</h5>
                        <button className={styles.view} type="button">View Work</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={web1} className={styles.img1} alt="Page 4" />
                        <img src={mob1} className={styles.img2} alt="Mobile 4" />
                    </div>
                    <div className={styles.discribe}>
                        <h5>UI Soup</h5>
                        <button className={styles.view} type="button">View Work</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={web2} className={styles.img1} alt="Page 5" />
                        <img src={mob2} className={styles.img2} alt="Mobile 5" />
                    </div>
                    <div className={styles.discribe}>
                        <h5>Goldcrown Labs</h5>
                        <button className={styles.view} type="button">View Work</button>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.back} id="back" onClick={goBack} type="button"
                    style={count <= 20 ? disableButton() : {}}><img src={left} alt="left" className={styles.left}/></button>
                <button className={styles.next} id="next" onClick={() => goNext()} type="button"
                    style={count > 100 ? disableButton() : {} }><img src={right} alt="right" className={styles.right}/></button>
            </div>
        </section>
    )
};

export { OurWork };