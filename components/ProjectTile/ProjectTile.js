import React from "react";
import { useInView } from "react-intersection-observer";

// STYLES
import styles from "./ProjectTile.module.scss";

// COMPONENTS
import FlipCard from "../FlipCard/FlipCard";

export default function ProjectTile(props) {
    const { ref: myRef, inView: refIsVisible } = useInView();

    const { projectName } = props;

    return (
        <section
            className={`${styles[projectName]} ${
                refIsVisible ? styles.appear : ""
            }`}
            ref={myRef}
        >
            <div className={styles.project}>
                <FlipCard
                    source={props.source}
                    styles={{ backgroundColor: `${props.color}` }}
                    page={props.page}
                />
                <div className={styles.subtitle}>
                    <p>{props.subtitle}</p>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className={styles.title}>
                <p>{props.title_one}</p>
                <p>{props.title_two}</p>
                <p>{props.title_three}</p>
                {props.title_four && <p>{props.title_four}</p>}
            </div>
        </section>
    );
}
