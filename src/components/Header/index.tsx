import styles from "./styles.module.scss";
import facebook from "../../assets/link/facebook.svg";
import insta from "../../assets/link/insta.svg";
import linkIn from "../../assets/link/linkIn.svg";
import { useState } from "react";

const Header = () => {
    const [activeLine, setActive] = useState("Home");

    return (
        <header className={styles.header}>
            <input type="checkbox" id="check"/> 
            <label htmlFor="check" className={styles.container}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className={styles.nav}>
                <a href="#Home" style={{position: "relative"}}
                    onClick={() => setActive("Home")}>
                        Home{activeLine === "Home" && <ActiveLine />}
                </a>
                <a href="#About Us" style={{position: "relative"}}
                    onClick={() => setActive("About Us")}>
                        About Us{activeLine === "About Us" && <ActiveLine />}
                </a>
                <a href="#Services" style={{position: "relative"}}
                    onClick={() => setActive("Services")}>
                        Services{activeLine === "Services" && <ActiveLine />}
                </a>
                <a href="#Contact Us" style={{position: "relative"}}
                    onClick={() => setActive("Contact Us")}>
                        Contact Us{activeLine === "Contact Us" && <ActiveLine />}
                </a>
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
    )
};

export { Header };

function ActiveLine () {
    return (
        <div className={styles.activeLine} />
    )
}