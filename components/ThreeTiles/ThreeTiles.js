import React from "react";
import Image from "next/future/image";

// STYLES
import ThreeStyles from "./ThreeTiles.module.scss";

// COMPONENTS
import ScrollContainer from "../ScrollContainer/ScrollContainer";

export default function ThreeTiles(props) {
    return (
        <ScrollContainer currentComp={"three"}>
            <div className={ThreeStyles.one}>
                <p>{props.oneTitle}</p>
                <Image
                    src={`${props.oneSource}`}
                    className={ThreeStyles.picture}
                    width="400"
                    height="400"
                    alt="Picture"
                />
            </div>
            <div className={ThreeStyles.two}>
                <p>{props.twoTitle}</p>
                <Image
                    src={`${props.twoSource}`}
                    className={ThreeStyles.picture}
                    width="400"
                    height="400"
                    alt="Picture"
                />
            </div>
            <div className={ThreeStyles.three}>
                <p>{props.threeTitle}</p>
                <Image
                    src={`${props.threeSource}`}
                    className={ThreeStyles.picture}
                    width="400"
                    height="400"
                    alt="Picture"
                />
            </div>
        </ScrollContainer>
    );
}
