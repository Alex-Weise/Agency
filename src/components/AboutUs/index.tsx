import styles from "./styles.module.scss";
import people from "../../assets/Mask-group.png";
import { DEFAULT_TEXT } from "../../App";

const AboutUs = () => {

    return (
        <section className={styles.wrapper} id="About Us">
            <div className={styles.container_text}>
                <p className={styles.title1}>About Us</p>
                <p className={styles.title2}>Fake or Real</p>
                <p className={styles.text}>
                    {DEFAULT_TEXT}
                </p>
                <p className={styles.text}>
                    {DEFAULT_TEXT}
                </p>
                <button type="button" className={styles.button}>EXPLORE MORE</button>
            </div>
            <div className={styles.container_image}>
                <img src={people} alt="People group" />
                <div className={styles.dotted} />
                <div className={styles.vector} />
            </div>
        </section>
    )
};

export { AboutUs };