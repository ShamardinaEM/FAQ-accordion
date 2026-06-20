import "./App.css";
import starIcon from "./assets/icon-star.svg";
import minusIcon from "./assets/icon-minus.svg";
import plusIcon from "./assets/icon-plus.svg";
import { blocksData } from "./data";
import { useState } from "react";

function App() {
    const [isOpen, setIsOpen] = useState<number[]>([0]);

    const handleClick = (index: number) => {
        isOpen.includes(index)
            ? setIsOpen(isOpen.filter((item) => item !== index))
            : setIsOpen([...isOpen, index]);
    };
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <img src={starIcon} alt="icon-star" />
                    FAQs
                </div>
                {blocksData.map((item, index) => (
                    <>
                        <div key={index} className="block">
                            <div className="block-head">
                                <h2>{item.title}</h2>
                                <button
                                    className="show-btn"
                                    onClick={() => handleClick(index)}
                                >
                                    <span>
                                        <img
                                            src={
                                                isOpen.includes(index)
                                                    ? minusIcon
                                                    : plusIcon
                                            }
                                            alt="icon-btn"
                                        />
                                    </span>
                                </button>
                            </div>
                            <div className="text-area">
                                <p>{isOpen.includes(index) ? item.desc : ""}</p>
                            </div>
                        </div>
                        <div className="line"></div>
                    </>
                ))}
            </div>
            <footer className="attribution">
                Challenge by
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by
                <a
                    href="https://github.com/ShamardinaEM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ShamardinaEM
                </a>
                .
            </footer>
        </>
    );
}

export default App;
