import React, { useRef, useState, useEffect } from "react";

// STYLES
import OneStyles from "../OneTile/OneTile.module.scss";
import ThreeStyles from "../ThreeTiles/ThreeTiles.module.scss";
import HeaderStyles from "../ProjectHeader/ProjectHeader.module.scss";

export default function ScrollContainer(props) {
    const scrollRef = useRef();

    // EFFECT ON SCROLL
    const [isVisible, setIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        });
        observer.observe(scrollRef.current);
    }, []);

    //   CENTER SCROLL CONTAINER
    useEffect(() => {
        scrollRef.current.scrollLeft =
            (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2;
    }, []);

    // SCROLL ON MOUSE CLICK
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState("");
    const [scroll, setScroll] = useState("");

    const handleMouseDown = (event) => {
        setIsDown(true);
        const position = event.pageX - scrollRef.current.offsetLeft;
        setStartX(position);
        setScroll(scrollRef.current.scrollLeft);
    };
    const handleMouseLeave = () => {
        setIsDown(false);
    };
    const handleMouseMove = (event) => {
        if (!isDown) return;
        event.preventDefault();
        const positionX = event.pageX - scrollRef.current.offsetLeft;
        const move = positionX - startX;
        scrollRef.current.scrollLeft = scroll - move;
    };

    // SET COMPONENT
    let scrollContainer;
    if (props.currentComp === "header") {
        scrollContainer = (
            <header
                className={`${HeaderStyles.scroll_container} ${
                    isDown ? HeaderStyles.active : ""
                }`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {props.children}
            </header>
        );
    } else if (props.currentComp === "one") {
        scrollContainer = (
            <section
                className={`${OneStyles.container} 
        ${isDown ? OneStyles.active : ""} 
        ${isVisible ? OneStyles.inview : ""}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {props.children}
            </section>
        );
    } else if (props.currentComp === "three") {
        scrollContainer = (
            <section
                className={`${ThreeStyles.container} ${
                    isDown ? ThreeStyles.active : ""
                }
        ${isVisible ? ThreeStyles.inview : ""}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {props.children}
            </section>
        );
    } else {
        scrollContainer = <div></div>;
    }

    return <>{scrollContainer}</>;
}
