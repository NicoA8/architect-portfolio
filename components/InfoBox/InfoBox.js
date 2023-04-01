import React from "react";

// STYLES
import styles from "./InfoBox.module.scss";

export default function InfoBox(props) {
  return (
    <div className={styles.info_box}>
      <p className={styles.subtitle}>{props.subtitle}</p>
      <p className={styles.title}>{props.title}</p>
      {props.details && <p className={styles.details}> {props.details}</p>}
    </div>
  );
}
