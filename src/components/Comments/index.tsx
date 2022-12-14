import styles from "./styles.module.scss";
import znak from "../../assets/link/znak.svg";
import { DEFAULT_TEXT } from "../../App";

const OurComments = () => {
    return (
        <section className={styles.wrapper}>
            <p className={styles.title1}>Our Testimonials</p>
            <p className={styles.title2}>What Our Clients Are <span>Saying</span></p>
            <div className={styles.container}>
                <div className={styles.comm}>
                    <img src={znak} alt="Sign" />
                    <p className={styles.text1}>{DEFAULT_TEXT}</p>
                    <p className={styles.text2}>UI Soup</p>
                </div>
                <div className={styles.comm}>
                    <img src={znak} alt="Sign" />
                    <p className={styles.text1}>{DEFAULT_TEXT}</p>
                    <p className={styles.text2}>UI Soup</p>
                </div>
            </div>
        </section>
    )
};

export { OurComments };