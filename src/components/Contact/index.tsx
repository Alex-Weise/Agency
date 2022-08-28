import { DEFAULT_TEXT } from "../../App";
import styles from "./styles.module.scss";
import map from "../../assets/Map.png";

const Contact = () => {
    return (
        <section className={styles.wrapper} id="Contact Us">
            <div className={styles.black} />
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>Dream Agency</p>
                    <p className={styles.text}>{DEFAULT_TEXT}</p>
                    <p className={styles.text2}>GET IN TOUCH</p>
                    <input className={styles.input} type="email" placeholder="ENTER YOUR EMAIL" />
                    <button className={styles.button} type="button">SEND</button>
                </div>
                <div className={styles.image}>
                    <img src={map} alt="Map" />
                    <div className={styles.info}>
                        <p className={styles.town}>Texas</p>
                        <p className={styles.country}>United States</p>
                        <a href="https://www.google.ru/maps/@32.8834651,-97.4336216,8.15z">View Larger Map</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export { Contact };