import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./DigitalList.module.scss";

import SkillsBar from "../SkillsBar/SkillsBar";

export default function DigitalList(props) {
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
            <p className={styles.section_title}>competențe digitale</p>
            <p className={`${styles.title} ${styles.autodesk}`}>autodesk</p>
            <ul className={styles.second_list}>
                <li className={styles.list_item}>Revit</li>
                <SkillsBar level={4} />
                <li className={styles.list_item}>autocad</li>
                <SkillsBar level={5} />
            </ul>
            <p className={`${styles.title} ${styles.microsoft}`}>microsoft</p>
            <ul className={styles.second_list}>
                <li className={styles.list_item}>word</li>
                <SkillsBar level={6} />
                <li className={styles.list_item}>excel</li>
                <SkillsBar level={5} />
            </ul>
            <p className={`${styles.title} ${styles.adobe}`}>Adobe</p>
            <ul className={styles.second_list}>
                <li className={styles.list_item}>photoshop</li>
                <SkillsBar level={4} />
                <li className={styles.list_item}>illustrator</li>
                <SkillsBar level={4} />
                <li className={styles.list_item}>indesign</li>
                <SkillsBar level={4} />
            </ul>
            <p className={`${styles.title} ${styles.sketchup}`}>sketchup</p>
            <SkillsBar level={3} />
            <p className={`${styles.title} ${styles.lumion}`}>lumion</p>
            <SkillsBar level={5} />
        </section>
    );
}
