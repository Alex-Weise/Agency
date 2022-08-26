import styles from "./styles.module.scss";
import facebook from "../../assets/link/facebook.png";
import insta from "../../assets/link/insta.png";
import linkIn from "../../assets/link/linkIn.png";
import { useEffect, useState } from "react";

const Header = () => {
    const [activeLine, setActive] = useState("Home");

    useEffect( () => {
        const hadlerScroll = () => {
            const scrolled = Math.ceil(window.scrollY);
            const widthScreen = window.innerWidth;
            if (widthScreen <= 576) {
                if (scrolled < 350 ) {
                    setActive("Home");
                } else if (scrolled >= 350 && scrolled <= 750) {
                    setActive("About Us");
                } else if (scrolled > 750 && scrolled < 1350) {
                    setActive("Services");
                } else { setActive("Contact Us")};
            } else if (widthScreen > 576 && widthScreen < 767) {
                if (scrolled < 400) {
                    setActive("Home");
                } else if (scrolled >= 400 && scrolled < 870) {
                    setActive("About Us");
                } else if (scrolled >= 870 && scrolled < 1700) {
                    setActive("Services");
                } else { setActive("Contact Us")};
            } else if (widthScreen >= 767 && widthScreen < 1024) {
                if (scrolled < 550) {
                    setActive("Home");
                } else if (scrolled >= 550 && scrolled < 1200) {
                    setActive("About Us");
                } else if (scrolled >= 1200 && scrolled < 2300) {
                    setActive("Services");
                } else { setActive("Contact Us")};
            } else if (widthScreen >= 1024 && widthScreen < 1440) {
                if (scrolled < 550) {
                    setActive("Home");
                } else if (scrolled >= 550 && scrolled < 1300) {
                    setActive("About Us");
                } else if (scrolled >= 1300 && scrolled < 2700) {
                    setActive("Services");
                } else { setActive("Contact Us")};
            } else {
                if (scrolled < 650) {
                    setActive("Home");
                } else if (scrolled >= 650 && scrolled < 1500) {
                    setActive("About Us");
                } else if (scrolled >= 1500 && scrolled < 3000) {
                    setActive("Services");
                } else { setActive("Contact Us")};
            }

        };
        window.addEventListener("scroll", hadlerScroll);
        return () => {
            window.removeEventListener("scroll", hadlerScroll);
        };
    }, [setActive])

    const scrollTo = (str:string) => {
        let width = window.innerWidth;
        let max = document.documentElement.scrollHeight - window.innerHeight;
        if ( str === "About Us") {
            if (width >= 1440) {
                window.scrollTo(0, 1550);
            } else if (width < 1440 && width >= 1024) {
                window.scrollTo(0, 1500);
            } else if (width < 1024 && width >= 767) {
                window.scrollTo(0, 1200);
            } else if(width < 767 && width >= 576) {
                window.scrollTo(0, 500);
            } else { window.scrollTo(0, 850);}
        } else  if ( str === "Services") {
            if (width >= 1440) {
                window.scrollTo(0, 2400);
            } else if (width < 1440 && width >= 1024) {
                window.scrollTo(0, 2250);
            } else if (width < 1024 && width >= 767) {
                window.scrollTo(0, 1800);
            } else if(width < 767 && width >= 576) {
                window.scrollTo(0, 900);
            } else { window.scrollTo(0, 1200);}
        } else  if ( str === "Contact Us") {
            window.scrollTo(0, max)
        }
    };

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
                    onClick={() => {setActive("Services"); scrollTo("Services")}}>
                        Services{activeLine === "Services" && <ActiveLine />}
                </div>
                <div style={{position: "relative"}}
                    onClick={() => {setActive("Contact Us"); scrollTo("Contact Us")}}>
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