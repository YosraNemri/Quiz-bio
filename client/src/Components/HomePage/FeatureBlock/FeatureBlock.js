import React from "react";
import "./FeatureBlock.css";
const FeatureBlock = () => {
    return (
        <div className="FeatureBlock">
            <div className="wrapper">
                <div className="Banner-FeatureBlock">
                    <div className="column-FeatureBlock">
                        <img src="./images/quiz_display.png" alt="Quiz" />
                    </div>
                    <div className="column-FeatureBlock">
                        <h2 className="Heading-FeatureBlock">
                            Take quiz on different topics
                        </h2>
                        <p>
                            You can explore different categories and take quiz.
                        </p>
                        <ul className="ul-FeatureBlock">
                            <li>Microscopy Type</li>
                            <li>Type of Component</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureBlock;
