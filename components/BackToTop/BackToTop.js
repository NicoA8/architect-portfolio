import React, { useEffect, useState } from "react";

import styles from "./BackToTop.module.scss";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const scroll = window.scrollY;
            if (scroll > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={goToTop}
            className={`${styles.box} ${visible ? styles.visible : ""}`}
        >
            <svg
                viewBox="0 0 32 32"
                className="icon icon-caret-top"
                aria-hidden="true"
            >
                <path
                    className={visible ? styles.active : ""}
                    d="M8 20.695l7.997-11.39L24 20.695z"
                />
            </svg>
        </button>
    );
}
