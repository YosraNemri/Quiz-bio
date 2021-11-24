import "./SelectQuiz.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SelectQuiz = () => {
    return (
        <>
            <Helmet>
                <title>Select Quiz</title>
            </Helmet>
            <div className="QuizItemList">
                <h2>Select any quiz category</h2>
                <div className="QuizCategory">
                    <div className="QuizItem">
                        <h3>Microscopy Type</h3>
                        <p>Take questions related to Microscopy Type</p>
                        <Link to="/microscopy-quiz" className="Quiz-button">
                            <span>Take Quiz →</span>
                        </Link>
                    </div>
                    <div className="QuizItem">
                        <h3>Component Type</h3>
                        <p>Take questions related to Component Type</p>
                        <Link to="/component-quiz" className="Quiz-button">
                            <span>Take Quiz →</span>
                        </Link>
                    </div>
                </div>
                <h3>You Can Also Explore The Images</h3>
                <Link to="/explore-images" id="Explore-button">
                    <span>Explore</span>
                </Link>
            </div>
        </>
    );
};

export default SelectQuiz;
