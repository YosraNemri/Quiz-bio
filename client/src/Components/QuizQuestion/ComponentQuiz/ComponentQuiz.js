import "./ComponentQuiz.css";
import { useState } from "react";
import Loader from "react-loader-spinner";
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ComponentQuiz = ({ question, images, answer, info, setUser }) => {
    /////////// Filter Image /////////
    const PW = images.filter((el) => el.component === "pollen wall");
    const Dendrite = images.filter((el) => el.component === "dendrite");
    const SV = images.filter((el) => el.component === "synaptic vesicle");
    const MC = images.filter(
        (el) => el.component === "microtubule cytoskeleton"
    );
    const Desmosome = images.filter((el) => el.component === "desmosome");
    const Axoneme = images.filter((el) => el.component === "axoneme");
    const ER = images.filter((el) => el.component === "endoplasmic reticulum");
    const Mitochondrion = images.filter(
        (el) => el.component === "mitochondrion"
    );
    /////////// Filter Image /////////

    /******************** Function Shuffle to change question order **********************/
    const shuffle = (array) => {
        const x = array.sort(() => Math.random() - 0.5);
        return x;
    };
    let questions = [];
    /**************** Quiz Question ********************/
    if (images.length !== 0) {
        questions = [
            {
                answerOptions: [
                    {
                        answerText: "desmosome",
                        Correct: "mitochondrion",
                    },
                    {
                        answerText: "endoplasmic reticulum",
                        Correct: "mitochondrion",
                    },
                    {
                        answerText: "synaptic vesicle",
                        Correct: "mitochondrion",
                    },
                    {
                        answerText: "mitochondrion",
                        Correct: "mitochondrion",
                    },
                ],
                images: [Mitochondrion[1].name, Mitochondrion[5].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "dendrite",
                        Correct: "pollen wall",
                    },
                    {
                        answerText: "pollen wall",
                        Correct: "pollen wall",
                    },
                    {
                        answerText: "synaptic vesicle",
                        Correct: "pollen wall",
                    },
                    {
                        answerText: "axoneme",
                        Correct: "pollen wall",
                    },
                ],
                images: [PW[2].name, PW[7].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "mitochondrion",
                        Correct: "microtubule cytoskeleton",
                    },
                    {
                        answerText: "pollen wall",
                        Correct: "microtubule cytoskeleton",
                    },
                    {
                        answerText: "microtubule cytoskeleton",
                        Correct: "microtubule cytoskeleton",
                    },
                    {
                        answerText: "endoplasmic reticulum",
                        Correct: "microtubule cytoskeleton",
                    },
                ],
                images: [MC[0].name, MC[1].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "axoneme",
                        Correct: "synaptic vesicle",
                    },
                    {
                        answerText: "desmosome",
                        Correct: "synaptic vesicle",
                    },
                    {
                        answerText: "synaptic vesicle",
                        Correct: "synaptic vesicle",
                    },
                    {
                        answerText: "dendrite",
                        Correct: "synaptic vesicle",
                    },
                ],
                images: [SV[0].name, SV[1].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "dendrite",
                        Correct: "dendrite",
                    },
                    {
                        answerText: "synaptic vesicle",
                        Correct: "dendrite",
                    },
                    {
                        answerText: "microtubule cytoskeleton",
                        Correct: "dendrite",
                    },
                    {
                        answerText: "mitochondrion",
                        Correct: "dendrite",
                    },
                ],
                images: [Dendrite[0].name, Dendrite[4].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "pollen wall",
                        Correct: "endoplasmic reticulum",
                    },
                    {
                        answerText: "endoplasmic reticulum",
                        Correct: "endoplasmic reticulum",
                    },
                    {
                        answerText: "mitochondrion",
                        Correct: "endoplasmic reticulum",
                    },
                    {
                        answerText: "desmosome",
                        Correct: "endoplasmic reticulum",
                    },
                ],
                images: [ER[3].name, ER[6].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "microtubule cytoskeleton",
                        Correct: "desmosome",
                    },
                    {
                        answerText: "pollen wall",
                        Correct: "desmosome",
                    },
                    {
                        answerText: "desmosome",
                        Correct: "desmosome",
                    },
                    {
                        answerText: "synaptic vesicle",
                        Correct: "desmosome",
                    },
                ],
                images: [Desmosome[0].name, Desmosome[2].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "dendrite",
                        Correct: "axoneme",
                    },
                    {
                        answerText: "microtubule cytoskeleton",
                        Correct: "axoneme",
                    },
                    {
                        answerText: "mitochondrion",
                        Correct: "axoneme",
                    },
                    {
                        answerText: "axoneme",
                        Correct: "axoneme",
                    },
                ],
                images: [Axoneme[2].name, Axoneme[8].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "desmosome",
                        Correct: "pollen wall",
                    },
                    {
                        answerText: "synaptic vesicle",
                        Correct: "pollen wall",
                    },
                    {
                        answerText: "endoplasmic reticulum",
                        Correct: "pollen wall",
                    },
                    {
                        answerText: "pollen wall",
                        Correct: "pollen wall",
                    },
                ],
                images: [PW[1].name, PW[5].name],
            },
            {
                answerOptions: [
                    {
                        answerText: "microtubule cytoskeleton",
                        Correct: "mitochondrion",
                    },
                    {
                        answerText: "endoplasmic reticulum",
                        Correct: "mitochondrion",
                    },
                    {
                        answerText: "axoneme",
                        Correct: "mitochondrion",
                    },
                    {
                        answerText: "mitochondrion",
                        Correct: "mitochondrion",
                    },
                ],
                images: [Mitochondrion[3].name, Mitochondrion[4].name],
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
            setScore(score + question[1].point);
        }
        if (Correct !== answerText) {
            setAnswerToShow(Correct);
            setShowAnswer(true);
            setDisabledBtn(!disabledBtn);
            setScore(score - question[1].point);
        }
    };

    return (
        <>
            <Helmet>
                <title>Component Quiz</title>
            </Helmet>
            <div className="ComponentQuiz">
                {!showScore ? (
                    <div className="Questions">
                        {question.length !== 0 &&
                        images.length !== 0 &&
                        answer.length !== 0 &&
                        questions.length !== 0 ? (
                            <>
                                <p>Question {currentQuestion + 1}</p>
                                <div className="Questions-block-Component ">
                                    <div className="QuestionImagesComponent">
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
                                    <h2>{question[1].question}</h2>
                                    <div className="AnswersComponent">
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

export default ComponentQuiz;
