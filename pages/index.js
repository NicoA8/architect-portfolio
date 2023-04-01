import Head from "next/head";

// CONTEXT
import { ThemeContext } from "../context/theme";
import { useContext, useEffect, useState } from "react";

// STYLES
import styles from "./index.module.scss";

// COMPONENTS
import NavLink from "../components/NavLink";
import ThemeButton from "../components/ThemeButton/ThemeButton";
import LoadingWrap from "../components/LoadingWrap/LoadingWrap";
import Signature from "../components/Signature/Signature";

export default function Home() {
    // THEME BUTTON
    const theme = useContext(ThemeContext);

    const [subtitle, setSubtitle] = useState(false);
    const [extra, setExtra] = useState(false);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSubtitle(true);
        }, 8000);
    });
    useEffect(() => {
        setTimeout(() => {
            setExtra(true);
        }, 4000);
    });
    useEffect(() => {
        setTimeout(() => {
            setNav(true);
        }, 3000);
    });

    return (
        <LoadingWrap title={"arhitectura & arta"}>
            <Head>
                <title>Mădălina M. Astancăi | Portofoliu Arhitectură</title>
            </Head>
            <header className={styles.banner_box}>
                <div className={styles.banner_content}>
                    <nav>
                        <NavLink
                            href="/about"
                            className={`${styles.about} ${
                                nav ? styles.active : ""
                            }`}
                        >
                            detalii
                        </NavLink>
                        <NavLink
                            href="/projects"
                            className={`${styles.projects} ${
                                nav ? styles.active : ""
                            }`}
                        >
                            proiecte
                        </NavLink>
                        <NavLink
                            href="/contact"
                            className={`${styles.contact} ${
                                nav ? styles.active : ""
                            }`}
                        >
                            contact
                        </NavLink>
                    </nav>
                    <span
                        className={`${styles.line} ${
                            extra ? styles.active : ""
                        }`}
                    >
                        reper de artă
                    </span>
                    <span
                        className={`${styles.concept} ${
                            extra ? styles.active : ""
                        }`}
                    >
                        concept
                    </span>
                    <div className={styles.details_background}>
                        <ThemeButton
                            home={true}
                            theme={theme.isDark}
                            handleClick={theme.setTheme}
                        />
                    </div>
                    <div className={styles.details_logo} alt="Logo">
                        <Signature />
                    </div>
                    <div
                        className={`${styles.details_text} ${
                            subtitle ? styles.active : ""
                        }`}
                    >
                        <p className={styles.title}>maria mădălina</p>
                        <p className={styles.sub_title}>arhitect</p>
                    </div>
                </div>
            </header>
        </LoadingWrap>
    );
}
