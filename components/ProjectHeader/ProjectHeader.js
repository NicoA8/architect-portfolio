import React, { useEffect, useRef, useState } from "react";
import Image from "next/future/image";

// STYLES
import HeaderStyles from "./ProjectHeader.module.scss";

// COMPONENTS
import ScrollContainer from "../ScrollContainer/ScrollContainer";

export default function ProjectHeader(props) {
    const { projectName } = props;

    return (
        <header
            className={`${HeaderStyles.header}  ${HeaderStyles[projectName]}`}
        >
            <ScrollContainer currentComp={"header"}>
                <Image
                    src={`${props.coverSource}`}
                    className={HeaderStyles.cover}
                    width="2253"
                    height="1173"
                    alt="cover"
                />
            </ScrollContainer>
            <div className={HeaderStyles.description}>
                <div className={HeaderStyles.logo_title}>
                    <div className={HeaderStyles.title_box}>
                        <h1 className={HeaderStyles.subtitle}>{props.title}</h1>
                        <h2 className={HeaderStyles.title}>{projectName}</h2>
                    </div>
                    <Image
                        src={`${props.logoSource}`}
                        className={HeaderStyles.logo}
                        width="400"
                        height="400"
                        alt="logo"
                    />
                </div>
                <p className={HeaderStyles.one}>{props.subtitle}</p>
                <p className={HeaderStyles.two}>{props.text}</p>
            </div>
        </header>
    );
}
