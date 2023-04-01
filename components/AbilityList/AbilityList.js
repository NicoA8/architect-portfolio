import React from "react";
import styles from "./AbilityList.module.scss";

export default function AbilityList(props) {
    const abilities = props.abilities;
    const listItems = abilities.map((ability) => (
        <li className={styles.list_item} key={ability}>
            {ability}
        </li>
    ));
    return <ul className={styles.abilities_list}>{listItems}</ul>;
}
