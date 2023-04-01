import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./InfoSection.module.scss";

import InfoBox from "../InfoBox/InfoBox";

function InfoSection(props) {
    const { ref: myRef, inView: refIsVisible } = useInView();
    const { infoClass, info } = props;
    return (
        <section
            className={`${styles.inview_section} ${styles[infoClass]} ${
                refIsVisible ? styles.appear : ""
            }`}
            ref={myRef}
            tabIndex={"0"}
        >
            <p className={styles.section_title}>{props.title}</p>
            {info.map((item) => (
                <InfoBox
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
        </section>
    );
}

export default InfoSection;
