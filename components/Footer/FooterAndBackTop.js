import React from "react";
import { useInView } from "react-intersection-observer";

import BackToTop from "../BackToTop/BackToTop";

import styles from "./Footer.module.scss";

export default function FooterAndBackTop() {
    const { ref: myRef, inView: refIsVisible } = useInView();

    return (
        <>
            <BackToTop />
            <footer
                className={`${styles.footer} ${
                    refIsVisible ? styles.appear : ""
                }`}
                ref={myRef}
            >
                <p>&#9400; Arhitect Astancăi Maria Mădălina </p>
            </footer>
        </>
    );
}
