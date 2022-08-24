import styles from "./styles.module.scss";

const WhatWeDo = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.blue} />
            </div>
            <p className={styles.title1}>What We Do</p>
            <p className={styles.title2}>For Your Business</p>
            <div className={styles.line} />
        </section>
    )
};


export { WhatWeDo };