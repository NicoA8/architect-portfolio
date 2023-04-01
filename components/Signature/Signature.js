import React from "react";
import { useState, useEffect } from "react";

// STYLES
import styles from "./Signature.module.scss";

export default function Signature() {
    const [line1, setLine1] = useState(false);
    const [line2, setLine2] = useState(false);
    const [line3, setLine3] = useState(false);
    const [a1, setA1] = useState(false);
    const [d, setD] = useState(false);
    const [a2, setA2] = useState(false);
    const [l, setL] = useState(false);
    const [i1, setI1] = useState(false);
    const [i2, setI2] = useState(false);
    const [n, setN] = useState(false);
    const [a3, setA3] = useState(false);
    const [line4, setLine4] = useState(false);
    const [line5, setLine5] = useState(false);
    const [line6, setLine6] = useState(false);
    const [across, setAcross] = useState(false);
    const [dot, setDot] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLine1(true);
        }, 600);
        setTimeout(() => {
            setLine2(true);
        }, 1000);
        setTimeout(() => {
            setLine3(true);
        }, 1400);
        setTimeout(() => {
            setA1(true);
        }, 1800);
        setTimeout(() => {
            setD(true);
        }, 2200);
        setTimeout(() => {
            setA2(true);
        }, 2600);
        setTimeout(() => {
            setL(true);
        }, 3000);
        setTimeout(() => {
            setI1(true);
        }, 3400);
        setTimeout(() => {
            setI2(true);
        }, 3800);
        setTimeout(() => {
            setN(true);
        }, 4200);
        setTimeout(() => {
            setA3(true);
        }, 4600);
        setTimeout(() => {
            setLine4(true);
        }, 5000);
        setTimeout(() => {
            setLine5(true);
        }, 5400);
        setTimeout(() => {
            setLine6(true);
        }, 5800);
        setTimeout(() => {
            setAcross(true);
        }, 6200);
        setTimeout(() => {
            setDot(true);
        }, 6600);
    }, []);
    return (
        <div className={styles.signature}>
            <svg
                className={line1 ? styles.active : ""}
                width="4"
                height="181"
                viewBox="0 0 4 181"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2V179" />
            </svg>
            <svg
                className={line2 ? styles.active : ""}
                width="4"
                height="49"
                viewBox="0 0 4 49"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2L2 47" />
            </svg>
            <svg
                className={line3 ? styles.active : ""}
                width="4"
                height="49"
                viewBox="0 0 4 49"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2L2 47" />
            </svg>
            <svg
                className={a1 ? styles.active : ""}
                width="28"
                height="32"
                viewBox="0 0 28 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M15.897 5.51255C11.397 -8.98745 -10.103 26.5125 11.397 20.0125M14.397 13.0125C9.89697 21.0125 18.697 37.3125 25.897 26.5125" />
            </svg>
            <svg
                className={d ? styles.active : ""}
                width="27"
                height="86"
                viewBox="0 0 27 86"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M25.5 2C24.5 4 22.5 8.3 22.5 9.5C22.5 11 21.5 9.5 19.5 25.5C17.9 38.3 17.5 45.5 17.5 47.5V63.5V75.5C16.6667 68.1667 9.5 57.5 2.5 70.5C-0.5 87.5 12.8333 84.8333 17.5 81.5" />
            </svg>
            <svg
                className={a2 ? styles.active : ""}
                width="28"
                height="32"
                viewBox="0 0 28 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M15.897 5.51255C11.397 -8.98745 -10.103 26.5125 11.397 20.0125M14.397 13.0125C9.89697 21.0125 18.697 37.3125 25.897 26.5125" />
            </svg>
            <svg
                className={l ? styles.active : ""}
                width="28"
                height="76"
                viewBox="0 0 28 76"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.5 40.5C19.3333 30 33.5 6.5 20 2C6.5 -2.5 1.66666 33.8333 1.99999 47C1.66666 64 5.5 90.2 23.5 59" />
            </svg>
            <svg
                className={i1 ? styles.active : ""}
                width="11"
                height="14"
                viewBox="0 0 11 14"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 2C1.66667 8.66667 1 18.9 9 6.5" />
            </svg>

            <svg
                className={i2 ? styles.active : ""}
                width="11"
                height="12"
                viewBox="0 0 11 12"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.5 4C3.57807 -4.37191 -2.49997 13 6.5 9" />
            </svg>
            <svg
                className={n ? styles.active : ""}
                width="27"
                height="23"
                viewBox="0 0 27 23"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 21.5C4.66667 8.66667 10.7 -11 13.5 13C19.5 -5 24 5.5 25.5 13" />
            </svg>
            <svg
                className={a3 ? styles.active : ""}
                width="28"
                height="32"
                viewBox="0 0 28 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M15.897 5.51255C11.397 -8.98745 -10.103 26.5125 11.397 20.0125M14.397 13.0125C9.89697 21.0125 18.697 37.3125 25.897 26.5125" />
            </svg>
            <svg
                className={line4 ? styles.active : ""}
                width="4"
                height="181"
                viewBox="0 0 4 181"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2V179" />
            </svg>
            <svg
                className={line5 ? styles.active : ""}
                width="4"
                height="49"
                viewBox="0 0 4 49"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2L2 47" />
            </svg>
            <svg
                className={line6 ? styles.active : ""}
                width="4"
                height="49"
                viewBox="0 0 4 49"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2L2 47" />
            </svg>
            <svg
                className={across ? styles.active : ""}
                width="427"
                height="87"
                viewBox="0 0 427 87"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M104.5 85.5C25.5 67.8333 -83.5 30.5 112.5 22.5C357.5 12.5 423.5 20 425.5 2" />
            </svg>
            <svg
                className={dot ? styles.active : ""}
                width="5"
                height="5"
                viewBox="0 0 5 5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 2C2.16667 2.5 1 3.5 3 3.5" />
            </svg>
        </div>
    );
}
