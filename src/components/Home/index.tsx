import styles from "./styles.module.scss";
import people from "../../assets/Two-people.png";

const Home = () => {

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <p className={styles.title1}>We Help you</p>
                <p className={styles.title2}>to grow your</p>
                <p className={styles.title3}>Business</p>
                <div className={styles.line}></div>
            </div>
            <p className={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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