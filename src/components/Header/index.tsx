import styles from "./styles.module.scss";
import facebook from "../../assets/link/facebook.png";
import insta from "../../assets/link/insta.png";
import linkIn from "../../assets/link/linkIn.png";
import { useState } from "react";

const Header = () => {
    const [activeLine, setActive] = useState("Home");

    const scrollTo = (str:string) => {
        let width = window.screen.width;
        if ( str === "About Us") {
            if (width > 1024) {
                window.scrollTo(0, 1500);
            } else if (width <= 1024 && width > 767) {
                window.scrollTo(0, 1160);
            } else  {
                window.scrollTo(0, 850);
            }
        }
    };
    // scrollTo("About Us");

    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <div style={{position: "relative"}}
                    onClick={() => setActive("Home")}>
                        Home{activeLine === "Home" && <ActiveLine />}
                </div>
                <div style={{position: "relative"}}
                    onClick={() => {setActive("About Us"); scrollTo("About Us")}}>
                        About Us{activeLine === "About Us" && <ActiveLine />}
                </div>
                <div style={{position: "relative"}}
                    onClick={() => setActive("Services")}>
                        Services{activeLine === "Services" && <ActiveLine />}
                </div>
                <div style={{position: "relative"}}
                    onClick={() => setActive("Contact Us")}>
                        Contact Us{activeLine === "Contact Us" && <ActiveLine />}
                </div>
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