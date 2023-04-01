import React from "react";
import Image from "next/future/image";

// STYLES
import OneStyles from "./OneTile.module.scss";

// COMPONENTS
import ScrollContainer from "../ScrollContainer/ScrollContainer";

export default function OneTile(props) {
    return (
        <ScrollContainer currentComp={"one"}>
            <div className={OneStyles.title}>
                <p>{props.oneTitle}</p>
                <p>{props.twoTitle}</p>
                {props.threeTitle && <p>{props.threeTitle}</p>}
                {props.fourTitle && <p>{props.fourTitle}</p>}
            </div>
            <Image
                src={`${props.planSource}`}
                className={OneStyles.plan}
                width="3307"
                height="973"
                alt="plan"
            />
        </ScrollContainer>
    );
}
