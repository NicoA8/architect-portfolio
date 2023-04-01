import React from "react";

// CONTEXT
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// STYLES
import NavLink from "../NavLink";
import ThemeButton from "../ThemeButton/ThemeButton";

// COMPONENTS
import styles from "./NavBar.module.scss";

export default function NavBar() {
    const theme = useContext(ThemeContext);

    return (
        <nav className={styles.menu}>
            <NavLink href="/" className={styles.home}>
                Acasa
            </NavLink>
            <NavLink href="/about" className={styles.about}>
                Detalii
            </NavLink>
            <NavLink href="/projects" className={styles.projects}>
                proiecte
            </NavLink>
            <NavLink href="/contact" className={styles.contact}>
                contact
            </NavLink>
            <ThemeButton
                home={false}
                theme={theme.isDark}
                handleClick={theme.setTheme}
            />
        </nav>
    );
}
