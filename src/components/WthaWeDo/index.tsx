import styles from "./styles.module.scss";
import website from "../../assets/link/website.png";
import computer from "../../assets/link/computer.png";
import mobile from "../../assets/link/mobile-phone.png";
import rocket from "../../assets/link/rocket.png";
import heart from "../../assets/link/icon-heart.png";
import { useState } from "react";
import { SHORT_TEXT } from "../../App";

const WhatWeDo = () => {
    const [count, setCount] = useState(15);

    const disableButton = ():Object => {
        return {pointerEvents: "none",
                opacity: "0.5"};
    }

    const goNext = () => {
        const width = window.screen.width;
        const cards = document.getElementById("cards");
        if (cards && count < 90 ) {
            setCount(prev => prev + 15);
            if (width > 576) {
                cards.style.cssText = `transform: translate(${20 - count}%, 0)`;
            } else if (width <= 398) {
                cards.style.cssText = `transform: translate(${20 - (count * 2.2)}%, 0)`;
            } else {cards.style.cssText = `transform: translate(${20 - (count * 1.5)}%, 0)`;}
        } 
    }

    const goBack = () => {
        const width = window.screen.width;
        const cards = document.getElementById("cards");
        if (cards && count > 15) {
            setCount(prev => prev - 15);
            if (width > 576) {cards.style.cssText = `transform: translate(${(105 - count) - 55}%, 0)`;
            } else if (width <= 398) {cards.style.cssText = `transform: translate(${((105 - count) * 2.2) - 145}%, 0)`;
            } else {cards.style.cssText = `transform: translate(${((105 - count) * 1.5) - 92.5}%, 0)`;}
        }
    }

    return (
        <section className={styles.container} data-testid="section">
            <div className={styles.wrapper}>
                <div className={styles.blue} />
            </div>
            <div className={styles.dotted} />
            <p className={styles.title1}>What We Do</p>
            <p className={styles.title2}>For Your Business</p>
            <div className={styles.cards} id="cards" data-testid="cards">
                <div className={styles.card}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FFDED4"}}>
                        <img src={website} alt="website" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>
                        {SHORT_TEXT}
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FFEED4"}}>
                        <img src={computer} alt="compute" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>
                        {SHORT_TEXT}
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_icon} style={{backgroundColor: "#D4F0FF"}}>
                        <img src={mobile} alt="mobile phone" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>
                        {SHORT_TEXT}
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FFD4D4"}}>
                        <img src={rocket} alt="rocket" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>
                        {SHORT_TEXT}
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FDC021"}}>
                        <img src={heart} alt="heart" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>
                        {SHORT_TEXT}
                    </p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.back} id="back" onClick={goBack} type="button"
                    style={count <= 15 ? disableButton() : {}}>{"<"}</button>
                <button className={styles.next} id="next" onClick={() => goNext()} type="button"
                    style={count >= 90 ? disableButton() : {} } >{">"}</button>
            </div>
        </section>
    )
};


export { WhatWeDo };