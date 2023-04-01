import React from "react";
import { useInView } from "react-intersection-observer";

// STYLES
import styles from "./SkillsBar.module.scss";

export default function SkillsBar(props) {
    const { ref: myRef, inView: refIsVisible } = useInView();

    let levelClass;
    if (props.level <= 3) {
        levelClass = styles.medium;
    } else if (props.level == 4) {
        levelClass = styles.good;
    } else if (props.level == 5) {
        levelClass = styles.advanced;
    } else {
        levelClass = styles.proficient;
    }

    return (
        <li
            className={`${styles.square_box}  ${
                refIsVisible ? styles.appear : ""
            } ${levelClass}`}
            ref={myRef}
        ></li>
    );
}
