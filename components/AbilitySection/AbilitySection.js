import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./AbilitySection.module.scss";

import AbilityList from "../AbilityList/AbilityList";

export default function AbilitySection(props) {
    const { ref: myRef, inView: refIsVisible } = useInView();
    const { abilityClass } = props;
    return (
        <section
            className={`${styles.inview_section} ${styles[abilityClass]} ${
                refIsVisible ? styles.appear : ""
            }`}
            ref={myRef}
            tabIndex={"0"}
        >
            <p className={styles.section_title}>competențe {props.title} </p>
            <AbilityList abilities={props.ability} />
        </section>
    );
}
