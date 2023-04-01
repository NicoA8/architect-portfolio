import React from "react";

// STYLES
import home_styles from "./HomeThemeButton.module.scss";
import nav_styles from "./NavThemeButton.module.scss";

export default function ThemeButton(props) {
    return props.home ? (
        <div
            className={
                props.theme
                    ? `${home_styles.button} ${home_styles.dark}`
                    : `${home_styles.button} ${home_styles.light}`
            }
            onClick={props.handleClick}
            tabIndex={"0"}
        >
            <p className={home_styles.light}>Light</p>
            <p className={home_styles.dark}>Dark</p>
        </div>
    ) : (
        <div
            className={
                props.theme
                    ? `${nav_styles.button} ${nav_styles.dark}`
                    : `${nav_styles.button} ${nav_styles.light}`
            }
            onClick={props.handleClick}
        >
            <p className={nav_styles.light}>Light</p>
            <p className={nav_styles.dark}>Dark</p>
        </div>
    );
}
