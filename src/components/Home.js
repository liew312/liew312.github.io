import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

//https://www.tutorialrepublic.com/codelab.php?topic=css3&file=animate-letter-spacing-property
var test = keyframes`
40% {
    letter-spacing: 4rem;
}
`;
const animationRule = css`
    ${test} 6s
`;

const StyledP = styled.p`
    animation: ${animationRule};
`;

function Home() {
    const CHARACTERS = "weil";
    const [leftText, setLeftText] = useState("");
    const [rightText, setRightText] = useState("");
    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const [startErasing, setStartErasing] = useState(false);

    const typeDelay = 200;
    const pause = 700;
    //2->1 4->2
    // changeText();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!startErasing) {
                if (leftText !== CHARACTERS) {
                    setLeftText(
                        (prevLeftText) =>
                            prevLeftText + CHARACTERS[leftText.length]
                    );
                    setRightText(
                        (prevRightText) =>
                            CHARACTERS[leftText.length] + prevRightText
                    );
                }
            } else {
                if (leftText !== "") {
                    setLeftText((prevLeftText) => prevLeftText.slice(0, -1));
                    setRightText((prevRightText) => prevRightText.slice(1));
                }
            }
        }, typeDelay + Math.random() * typeDelay);

        //still typing
        if (!startErasing) {
            if (leftText === CHARACTERS) {
                setTimeout(() => {
                    setIsTypingFinished(true);
                    setTimeout(() => {
                        setIsTypingFinished(false);
                    }, 6000);
                    setTimeout(() => {
                        setStartErasing(true);
                    }, 7000);
                }, pause);

                clearTimeout(timer);
            }
        } else {
            if (leftText === "") {
                setIsTypingFinished(false);

                setStartErasing(false);

                clearTimeout(timer);
            }
        }

        return () => clearTimeout(timer);
    }, [leftText, startErasing]);

    return (
        <div className="container">
            {/* <StyledP>Letter spacing</StyledP> */}
            {isTypingFinished === false ? (
                <p>
                    {leftText}
                    {<span className="cursor">&nbsp;</span>}
                    {rightText}
                </p>
            ) : (
                <StyledP>
                    {leftText}
                    {rightText}
                </StyledP>
            )}
        </div>
    );
}

export default Home;
