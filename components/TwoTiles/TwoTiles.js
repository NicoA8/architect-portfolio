import React from "react";
import Image from "next/future/image";
import { useInView } from "react-intersection-observer";

// STYLES
import styles from "./TwoTiles.module.scss";

export default function TwoTiles(props) {
    const { ref: firstRef, inView: firstRefIsVisible } = useInView();
    const { ref: secondRef, inView: secondRefIsVisible } = useInView();

    return (
        <section className={styles.container}>
            <div
                ref={firstRef}
                className={`${styles.one} ${
                    firstRefIsVisible ? styles.inview : ""
                }`}
            >
                <p>{props.oneTitle}</p>
                <Image
                    src={`${props.oneSource}`}
                    className={styles.picture}
                    width="400"
                    height="400"
                    alt="Picture"
                />
            </div>
            <div
                ref={secondRef}
                className={`${styles.two} ${
                    secondRefIsVisible ? styles.inview : ""
                }`}
            >
                <p>{props.twoTitle}</p>
                <Image
                    src={`${props.twoSource}`}
                    className={styles.picture}
                    width="400"
                    height="400"
                    alt="Picture"
                />
            </div>
        </section>
    );
}
