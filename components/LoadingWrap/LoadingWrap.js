import Head from "next/head";

import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

import React, { useEffect, useState } from "react";

import styles from "./LoadingWrap.module.scss";

export default function LoadingWrap(props) {
    const [loading, setLoading] = useState(false);
    const [hrefFavicon, setHrefFavicon] = useState("");

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const theme = useContext(ThemeContext);

    const setFavicon = () => {
        const isDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (isDarkMode) {
            setHrefFavicon("/favicon-light.ico");
        } else {
            setHrefFavicon("/favicon-dark.ico");
        }
    };

    useEffect(() => {
        setFavicon();
    }, []);

    return (
        <>
            <Head>
                <title>Mădălina M. Astancăi | Portofoliu Arhitectură</title>
                <meta
                    name="google-site-verification"
                    content="BT4d0ipD_vLelZDvUAuTnHYGAzuCZw4m298EZ989Vzw"
                />
                <meta
                    name="description"
                    content="Portofoliu arhitectură | Mădălina M. Astancăi | Concept | Reper de artă."
                />
                <meta httpEquiv="content-language" content="ro" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8" />
                <link rel="icon" href={hrefFavicon} />
            </Head>
            {loading ? (
                <div
                    className={`${styles.loading}  ${
                        theme.isDark ? styles.dark : ""
                    }`}
                >
                    <div className={theme.isDark ? "app dark" : "app"}>
                        <svg className={styles.svg} viewBox="0 0 1320 300">
                            <text
                                x="50%"
                                y="50%"
                                dy=".35em"
                                textAnchor="middle"
                            >
                                {props.title}
                            </text>
                        </svg>
                    </div>
                </div>
            ) : (
                <>
                    <div className={theme.isDark ? "app dark" : "app"}>
                        {props.children}
                    </div>
                </>
            )}
        </>
    );
}
