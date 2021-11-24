import "./AnswerQuestion.css";
import axios from "axios";
import { useState } from "react";
import MoreInformation from "../MoreInformationM/MoreInformation";
const AnswerQuestion = ({
    answerIsCorrect,
    answerToShow,
    showAnswer,
    answer,
    disabledBtn,
    currentQuestion,
    questions,
    images,
    moreInformation,
    score,
    question,
    info,
    setDisabledBtn,
    setCurrentQuestion,
    setShowAnswer,
    setAnswerIsCorrect,
    setShowScore,
    setUser,
}) => {
    /*** Find correct answer from table answer *****/
    const correctAnswer = answer.find((el) => el.answer === answerToShow);
    const [show, setShow] = useState(false);
    const showInfo = () => {
        setShow(true);
        setShowAnswer(false);
    };
    /**** function shuffle to change images */
    const shuffle = (array) => {
        const x = array.sort(() => Math.random() - 0.5);
        return x;
    };
    /**** calculate final points of quiz */
    const finalPoints = score + info.totalPoints;
    /**** calculate final points of Microscopy quiz */
    const newMicroScore = info.microscopyPoint + score;
    /***** Function  to change to the next question */
    const handleNext = () => {
        setDisabledBtn(!disabledBtn);
        setAnswerIsCorrect(false);
        const nextQuestions = currentQuestion + 1;
        if (nextQuestions < questions.length) {
            setCurrentQuestion(nextQuestions);
            shuffle(images);
        } else {
            setShowScore(true);
            setUser({
                ...info,
                totalPoints: finalPoints,
                microscopyPoint: newMicroScore,
            });
            /** axios function to update score in database ***/
            axios
                .put(`api/users/score/${info._id}`, {
                    totalPoints: finalPoints,
                    microscopyPoint: newMicroScore,
                })
                .then((res) => {
                    console.log("Status: ", res.status);
                    console.log("Data: ", res.data);
                })
                .catch((err) => {
                    console.log("Error in Update Situation !", err);
                });
        }
        setShowAnswer(false);
    };
    return (
        <>
            {showAnswer ? (
                <div className="answer-modal">
                    {answerIsCorrect ? (
                        <div className="header-answer-correct">
                            <img
                                src="./images/correct-answer.png"
                                alt="correctAnswer"
                                width="40px"
                                height="40px"
                            />
                            <h3>Your Answer is correct !</h3>

                            <h5>+{question[0].point}</h5>
                        </div>
                    ) : (
                        <div>
                            <div className="header-answer-false">
                                <img
                                    src="./images/false-answer.png"
                                    alt="falseAnswer"
                                    width="40px"
                                    height="40px"
                                />
                                <h3>Your Answer is incorrect... </h3>
                                <h5>-{question[0].point}</h5>
                            </div>
                            <p id="correct-answer">
                                The correct Answer was :
                                <span>{answerToShow}</span>
                            </p>
                        </div>
                    )}
                    <p>{correctAnswer.definition}</p>

                    <div className="modal-button">
                        <button id="link-btn" onClick={showInfo}>
                            More information
                        </button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            ) : null}
            {show ? (
                <MoreInformation
                    moreInformation={moreInformation}
                    setShow={setShow}
                    setShowAnswer={setShowAnswer}
                    images={images}
                />
            ) : null}
        </>
    );
};

export default AnswerQuestion;
