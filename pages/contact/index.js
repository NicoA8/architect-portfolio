import React from "react";
import Head from "next/head";
import { useContext, useRef, useState } from "react";
import Image from "next/future/image";
import emailjs from "@emailjs/browser";

// CONTEXT
import { ThemeContext } from "../../context/theme";

// STYLES
import styles from "./contact.module.scss";

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";

// IMAGE
import WLogo from "../../images/home/sa.png";
import BLogo from "../../images/home/sn.png";

function MyContactPage() {
    const theme = useContext(ThemeContext);
    const form = useRef();
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const messageInput = useRef(null);

    const [incomplete, setIncomplete] = useState(false);
    const [resultText, setResultText] = useState("");

    // RESULT
    let result;
    if (resultText === "ok") {
        result = "Mulțumesc! Vă voi contacta în curând!";
    } else if (resultText === "error") {
        result = "Mesajul nu a fost trimis. Încearcă din nou.";
    } else if (resultText === "incomplete") {
        result = "Mesaj incomplet. Verifică și încearcă din nou.";
    } else {
        result = "";
    }

    // SUBMIT EVENT
    const sendEmail = (e) => {
        if (
            nameInput.current.value === "" ||
            emailInput.current.value === "" ||
            messageInput.current.value === ""
        ) {
            e.preventDefault();
            setIncomplete(true);
            setResultText("incomplete");
        } else {
            e.preventDefault();
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_TOKEN
                )
                .then(
                    (result) => {
                        setResultText("ok");
                    },
                    (error) => {
                        setResultText("error");
                    }
                );
            setIncomplete(false);
            nameInput.current.value = "";
            emailInput.current.value = "";
            messageInput.current.value = "";
        }
    };
    return (
        <LoadingWrap title={"Contact"}>
            <Head>
                <title>Contact</title>
            </Head>
            <NavBar />
            <main className={styles.main}>
                <Image
                    src={theme.isDark ? WLogo : BLogo}
                    className={styles.logo}
                    alt="Logo"
                />
                <div className={styles.title_box}>
                    <p className={styles.title}>Arhitectura</p>
                    <p className={styles.title}>Urbanism</p>
                    <p className={styles.title}>Design interior</p>
                </div>
                <p className={styles.subtitle}>
                    Daca aveți vreo intrebare, mă puteți contacta prin
                    formularul de mai jos:
                </p>
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    <div className={styles.name_box}>
                        <label className={styles.form_title} htmlFor="name">
                            Nume
                        </label>
                        <input
                            className={`${styles.name} ${
                                incomplete ? styles.incomplete : ""
                            }`}
                            id="name"
                            type="text"
                            name="user_name"
                            placeholder="INCOMPLET"
                            ref={nameInput}
                        />
                    </div>
                    <div className={styles.email_box}>
                        <label className={styles.form_title} htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`${styles.email} ${
                                incomplete ? styles.incomplete : ""
                            }`}
                            id="email"
                            type="email"
                            name="user_email"
                            placeholder="INCOMPLET"
                            ref={emailInput}
                        />
                    </div>
                    <div className={styles.message_box}>
                        <label className={styles.form_title} htmlFor="message">
                            Mesaj
                        </label>
                        <textarea
                            className={`${styles.message} ${
                                incomplete ? styles.incomplete : ""
                            }`}
                            id="message"
                            name="message"
                            placeholder="INCOMPLET"
                            ref={messageInput}
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        trimite
                    </button>
                    <p className={styles.result}>{result}</p>
                </form>
            </main>
            <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
        </LoadingWrap>
    );
}
export default MyContactPage;
