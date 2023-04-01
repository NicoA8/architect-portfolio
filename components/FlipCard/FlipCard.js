import React, { useState } from "react";

import Image from "next/future/image";
import NavLink from "../NavLink";

import styles from "./FlipCard.module.scss";

export default function FlipCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image
                    className={`${styles.card_face}`}
                    src={`${props.source}`}
                    alt="LogoProiect"
                    width="1000"
                    height="1000"
                />
                <div
                    className={`${styles.card_back} ${styles.card_face}`}
                    style={props.styles}
                >
                    <NavLink
                        href={`${props.page}`}
                        className={styles.arrow_container}
                    >
                        <div className={styles.top}></div>
                        <div className={styles.bottom}></div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
