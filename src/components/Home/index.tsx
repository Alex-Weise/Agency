import styles from "./styles.module.scss";
import people from "../../assets/Two-people.png";
import { DEFAULT_TEXT } from "../../App";

const Home = () => {

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <p className={styles.title1}>We Help you</p>
                <p className={styles.title2}>to grow your</p>
                <p className={styles.title3}>Business</p>
            </div>
            <p className={styles.text}>
                {DEFAULT_TEXT}
            </p>
            <button type="button" className={styles.button}>GET STARTED</button>
            <div className={styles.images}>
                <img src={people} className={styles.img} alt="Two people" />
                <div className={styles.wrapper}>
                    <div className={styles.vector1} />
                </div>
                <div className={styles.vector2} />
                <div className={styles.vector3} />
            </div>
        </section>
    )
}

export { Home };