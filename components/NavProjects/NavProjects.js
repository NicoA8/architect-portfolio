import React from "react";
import NavLink from "../NavLink";

import styles from "./NavProjects.module.scss";

export default function NavProjects(props) {
    return (
        <>
            <nav className={styles.navbox}>
                {props.previous === null ? (
                    <span />
                ) : (
                    <NavLink
                        href={`/projects/${props.previous}`}
                        className={styles.previous_project}
                    >
                        {props.previous}
                    </NavLink>
                )}

                {props.next === null ? (
                    <span />
                ) : (
                    <NavLink
                        href={`/projects/${props.next}`}
                        className={styles.next_project}
                    >
                        {props.next}
                    </NavLink>
                )}
            </nav>
        </>
    );
}
