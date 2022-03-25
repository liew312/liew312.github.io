import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const textArray = ["things", "website", "game"];

export default function About() {
    const [text, setText] = useState("");
    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const [startErasing, setStartErasing] = useState(false);
    const [textArrIndex, setTextArrIndex] = useState(0);
    const typeDelay = 200;
    const pause = 700;
    //2->1 4->2
    // changeText();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!startErasing) {
                if (text !== textArray[textArrIndex]) {
                    setText(
                        (prevText) =>
                            prevText + textArray[textArrIndex][text.length]
                    );
                }
            } else {
                if (text !== "") {
                    setText((prevText) => prevText.slice(0, -1));
                }
            }
        }, 50 + Math.random() * typeDelay);

        //still typing
        if (!startErasing) {
            if (text === textArray[textArrIndex]) {
                setTimeout(() => {
                    setIsTypingFinished(true);
                    if (textArrIndex >= 2) {
                        setTextArrIndex(0);
                    } else {
                        setTextArrIndex(textArrIndex + 1);
                    }

                    setIsTypingFinished(false);
                    setTimeout(() => {
                        setStartErasing(true);
                    }, 1000);
                }, pause);

                clearTimeout(timer);
            }
        } else {
            if (text === "") {
                setIsTypingFinished(false);

                setStartErasing(false);

                clearTimeout(timer);
            }
        }

        return () => clearTimeout(timer);
    }, [text, startErasing]);

    return (
        <div className="container">
            <p>
                Hi I'm Liew.<br></br> I like to build&nbsp;
                <span style={{ color: "white" }}>{text}</span>
                <span className="cursor">&nbsp;</span>
                <br></br>
                <IconButton
                    color="inherit"
                    component="span"
                    onClick={() => {
                        window.open("mailto:liew0183@e.ntu.edu.sg");
                    }}
                >
                    <EmailIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    component="span"
                    onClick={() => {
                        window.open(
                            "https://www.linkedin.com/in/zi-peng-liew-360b561b2/",
                            "_blank"
                        );
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
            </p>
        </div>
    );
}
