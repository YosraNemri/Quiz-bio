import "./MicroscopyQuiz.css";
import { useState } from "react";
import Loader from "react-loader-spinner";
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MicroscopyQuiz = ({ question, images, answer, info, setUser }) => {
    /////////// Filter Image /////////
    const FM = images.filter((el) => el.mode === "fluorescence microscopy");
    const TEM = images.filter(
        (el) => el.mode === "transmission electron microscopy (TEM)"
    );
    const SEM = images.filter(
        (el) => el.mode === "scanning electron microscopy (SEM)"
    );
    const PCM = images.filter((el) => el.mode === "phase contrast microscopy");
    /////////// Filter Image /////////

    /******************** Function Shuffle to change question order **********************/
    const shuffle = (array) => {
        const x = array.sort(() => Math.random() - 0.5);
        return x;
    };
    /**************** Quiz Question ********************/
    let questions = [];
    if (images.length !== 0) {
        questions = [
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "phase contrast microscopy",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "phase contrast microscopy",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "phase contrast microscopy",
                    },
                    {
                        answerText: "phase contrast microscopy",
                        Correct: "phase contrast microscopy",
                    },
                ],
                images: [PCM[0].name, PCM[9].name, PCM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "Phase contrast Microscopy",
                        Correct: "fluorescence microscopy",
                    },
                ],
                images: [FM[0].name, FM[9].name, FM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "Phase contrast Microscopy",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                ],
                images: [TEM[0].name, TEM[9].name, TEM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                    {
                        answerText: "Phase contrast Microscopy",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                ],
                images: [SEM[0].name, SEM[9].name, SEM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "phase contrast microscopy",
                        Correct: "fluorescence microscopy",
                    },
                ],
                images: [FM[0].name, FM[9].name, FM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "Phase contrast Microscopy",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                ],
                images: [TEM[0].name, TEM[9].name, TEM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                    {
                        answerText: "phase contrast microscopy",
                        Correct: "scanning electron microscopy (SEM)",
                    },
                ],
                images: [SEM[0].name, SEM[9].name, SEM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "phase contrast microscopy",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "phase contrast microscopy",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "phase contrast microscopy",
                    },
                    {
                        answerText: "phase contrast microscopy",
                        Correct: "phase contrast microscopy",
                    },
                ],
                images: [PCM[0].name, PCM[9].name, PCM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                    {
                        answerText: "phase contrast microscopy",
                        Correct: "transmission electron microscopy (TEM)",
                    },
                ],
                images: [TEM[0].name, TEM[9].name, TEM[12].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "fluorescence microscopy",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "transmission electron microscopy (TEM)",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "scanning electron microscopy (SEM)",
                        Correct: "fluorescence microscopy",
                    },
                    {
                        answerText: "phase contrast microscopy",
                        Correct: "fluorescence microscopy",
                    },
                ],
                images: [FM[0].name, FM[9].name, FM[12].name],
            },
        ];
    }
    /********** Hook for Show Score you complete Quiz */
    const [showScore, setShowScore] = useState(false);
    /************************ Hook for Current Question of Quiz *************************/
    const [currentQuestion, setCurrentQuestion] = useState(0);
    /**************************** Hook for Quiz Score *****************/
    const [score, setScore] = useState(0);
    /************** Hook for Show answer Default : false **********/
    const [showAnswer, setShowAnswer] = useState(false);
    /******************************** Hook for if answer is correct change to true ******************/

    const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
    /*********** hook for correct answer to show **********/
    const [answerToShow, setAnswerToShow] = useState();
    /******************* Hook for answers Option button *******/
    const [disabledBtn, setDisabledBtn] = useState(false);
    /******************** hook for more information popup *********/
    const [moreInformation, setMoreInformation] = useState();
    /***** Change order of Question ******/
    shuffle(questions);
    /*************** function onclick work when you click answer  *******/
    const handleAnswerButtonClick = (Correct, answerText) => {
        setMoreInformation(questions[currentQuestion].images);
        if (Correct === answerText) {
            setAnswerIsCorrect(true);
            setAnswerToShow(Correct);
            setShowAnswer(true);
            setDisabledBtn(!disabledBtn);
            setScore(score + question[0].point);
        }
        if (Correct !== answerText) {
            setAnswerToShow(Correct);
            setShowAnswer(true);
            setDisabledBtn(!disabledBtn);
            setScore(score - question[0].point);
        }
    };

    return (
        <>
            <Helmet>
                <title>Microscopy Quiz</title>
            </Helmet>
            <div className="MicroscopyQuiz">
                {!showScore ? (
                    <div className="Questions">
                        {question.length !== 0 &&
                        images.length !== 0 &&
                        answer.length !== 0 &&
                        questions.length !== 0 ? (
                            <>
                                <p>Question {currentQuestion + 1}</p>
                                <div className="Questions-block">
                                    <div className="QuestionImages">
                                        {questions[currentQuestion].images.map(
                                            (image) => (
                                                <img
                                                    src={`https://res.cloudinary.com/project001/image/upload/v1633444216/quiz/${image}.jpg`}
                                                    alt="quizz"
                                                    width="250px"
                                                    height="250px"
                                                />
                                            )
                                        )}
                                    </div>
                                    <h2>{question[0].question}</h2>
                                    <div className="Answers">
                                        {questions[
                                            currentQuestion
                                        ].answerOptions.map((answerOptions) => (
                                            <button
                                                onClick={() =>
                                                    handleAnswerButtonClick(
                                                        answerOptions.Correct,
                                                        answerOptions.answerText
                                                    )
                                                }
                                                className="AnswerOption"
                                                disabled={disabledBtn}
                                            >
                                                {answerOptions.answerText}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <AnswerQuestion
                                    answerIsCorrect={answerIsCorrect}
                                    answerToShow={answerToShow}
                                    showAnswer={showAnswer}
                                    answer={answer}
                                    disabledBtn={disabledBtn}
                                    currentQuestion={currentQuestion}
                                    questions={questions}
                                    images={images}
                                    moreInformation={moreInformation}
                                    score={score}
                                    question={question}
                                    info={info}
                                    setUser={setUser}
                                    setDisabledBtn={setDisabledBtn}
                                    setShowScore={setShowScore}
                                    setShowAnswer={setShowAnswer}
                                    setAnswerIsCorrect={setAnswerIsCorrect}
                                    setCurrentQuestion={setCurrentQuestion}
                                />
                            </>
                        ) : (
                            <div className="loader-microscopy">
                                <Loader
                                    type="Circles"
                                    color="#f53838"
                                    height={60}
                                    width={60}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="ShowScore">
                        <div className="ShowScore-block">
                            <p>
                                Your Quiz Score is <span>{score}</span>
                            </p>
                            <Link id="Score-again" to="/selectquiz">
                                Try Again
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MicroscopyQuiz;
