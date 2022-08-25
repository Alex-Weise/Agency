import styles from "./styles.module.scss";
import people from "../../assets/Mask-group.png";

const AboutUs = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.container_text}>
                <p className={styles.title1}>About Us</p>
                <p className={styles.title2}>Fake or Real</p>
                <p className={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book.
                </p>
                <p className={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book.
                </p>
                <div className={styles.line} />
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