import styles from "./styles.module.scss";
import website from "../../assets/link/website.png";
import computer from "../../assets/link/computer.png";
import mobile from "../../assets/link/mobile-phone.png";
import rocket from "../../assets/link/rocket.png";
import heart from "../../assets/link/icon-heart.png";
import { useState } from "react";

const WhatWeDo = () => {
    const [count, setCount] = useState(15);

    const disableButton = ():Object => {
        return {pointerEvents: "none",
                opacity: "0.5"};
    }

    const goNext = () => {
        if (count < 90) {
            setCount(prev => prev + 15);
            const cards = document.getElementById("cards");
            if (cards) cards.style.cssText = `transform: translate(${20 - count}%, 0)`;
        }
    }

    const goBack = () => {
        if (count > 15) {
            setCount(prev => prev - 15);
            const cards = document.getElementById("cards");
            if (cards) cards.style.cssText = `transform: translate(${(105 - count) - 55}%, 0)`;
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.blue} />
                <div className={styles.line} />
            </div>
            <div className={styles.dotted} />
            <p className={styles.title1}>What We Do</p>
            <p className={styles.title2}>For Your Business</p>
            <div className={styles.cards} id="cards">
                <div className={styles.card1}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FFDED4"}}>
                        <img src={website} alt="website" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.card2}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FFEED4"}}>
                        <img src={computer} alt="compute" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.card3}>
                    <div className={styles.card_icon} style={{backgroundColor: "#D4F0FF"}}>
                        <img src={mobile} alt="mobile phone" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.card4}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FFD4D4"}}>
                        <img src={rocket} alt="rocket" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.card5}>
                    <div className={styles.card_icon} style={{backgroundColor: "#FDC021"}}>
                        <img src={heart} alt="heart" />
                    </div>
                    <h4 className={styles.card_title}>WECSITE DESIGN</h4>
                    <p className={styles.card_text}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.back} id="back" onClick={goBack} type="button"
                    style={count <= 15 ? disableButton() : {}}>{"<"}</button>
                <button className={styles.next} id="next" onClick={() => goNext()} type="button"
                    style={count >= 90 ? disableButton() : {}}>{">"}</button>
            </div>
        </section>
    )
};


export { WhatWeDo };