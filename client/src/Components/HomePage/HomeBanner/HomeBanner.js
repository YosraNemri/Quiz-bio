import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className="HomeBanner">
            <div className="wrapper">
                <div className="Banner">
                    <div className="column">
                        <h1 className="Heading">
                            Brush up your knowledge
                            <br /> by taking <strong> Quizzes</strong>
                        </h1>
                        <Link to="/selectquiz">
                            <span>Try Quiz</span>
                        </Link>
                    </div>
                    <div className="column">
                        <img src="./images/web-developer.png" alt="Quiz" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
