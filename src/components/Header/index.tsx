import styles from "./styles.module.scss";
import facebook from "../../assets/link/facebook.png";
import insta from "../../assets/link/insta.png";
import linkIn from "../../assets/link/linkIn.png";

const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.nav}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Contact Us</p>
                </div>
                <div className={styles.logo}>
                    <h1>Dream Agency</h1>
                </div>
                <div className={styles.link}>
                    <div className={styles.img}>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className={styles.img}>
                        <img src={linkIn} alt="linkIn" />
                    </div>
                    <div className={styles.img}>
                        <img src={insta} alt="Insta" />
                    </div>
                </div>
            </header>
        </>
    )
};

export { Header };