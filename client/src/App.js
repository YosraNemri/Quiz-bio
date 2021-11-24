import { useEffect, useState } from "react";
/***** bibliotheque ******/
import axios from "axios";
import jwt from "jwt-decode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

/*** Comopnents ******/
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SelectQuiz from "./Components/SelectQuiz/SelectQuiz";
import MicroscopyQuiz from "./Components/QuizQuestion/MicroscopyQuiz/MicroscopyQuiz";
import ComponentQuiz from "./Components/QuizQuestion/ComponentQuiz/ComponentQuiz";
import ExploreImage from "./Components/ExploreImage/ExploreImage";
import Profile from "./Components/Profile/Profile";
import PrivateComponent from "./Components/PrivateComponent/PrivateComponent";
import PublicComponent from "./Components/PublicComponent/PublicComponent";

function App() {
    /******* get token from localStorage */
    const token = localStorage.getItem("JWT");
    /*** get Email from token */
    const getEmail = () => {
        if (token !== null) {
            const decoded_token = jwt(token);
            return decoded_token.user.email;
        }
    };
    const email = getEmail();

    const [user, setUser] = useState();

    /******* get User info  from database  ******/
    const getUser = async () => {
        try {
            const details = await axios.post(`api/users/info`, {
                email,
            });
            setUser(details.data.user);
        } catch (err) {
            console.log(err);
        }
    };
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [images, setImages] = useState([]);

    /******* get Question from database ******/
    const getquestion = async () => {
        try {
            const question = await axios.get(`api/users/questions`);
            setQuestion(question.data.questions);
        } catch (err) {
            console.log(err);
        }
    };

    /************ Get answers from database ******/
    const getanswer = async () => {
        try {
            const answers = await axios.get(`api/users/answers`);
            setAnswer(answers.data.answers);
        } catch (err) {
            console.log(err);
        }
    };

    /************ Get Images from database ******/
    const getimages = async () => {
        try {
            const images = await axios.get(`api/users/images`);
            setImages(images.data.images);
        } catch (err) {
            console.log(err);
        }
    };
    /******** UseEffect Function work when page loaded  */
    useEffect(() => {
        getUser();
        getquestion();
        getanswer();
        getimages();
        //  eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <Router>
                <Header info={user} />
                <Switch>
                    <PrivateComponent
                        path="/selectquiz"
                        component={SelectQuiz}
                    />
                    <PrivateComponent
                        path="/component-quiz"
                        question={question}
                        answer={answer}
                        images={images}
                        info={user}
                        setUser={setUser}
                        component={ComponentQuiz}
                    />
                    <PrivateComponent
                        path="/microscopy-quiz"
                        question={question}
                        answer={answer}
                        images={images}
                        info={user}
                        setUser={setUser}
                        component={MicroscopyQuiz}
                    />
                    <PrivateComponent
                        path="/explore-images"
                        images={images}
                        component={ExploreImage}
                    />
                    <PrivateComponent
                        path="/profile"
                        info={user}
                        component={Profile}
                    />
                    <PublicComponent
                        restricted={true}
                        path="/register"
                        component={Register}
                    />
                    <PublicComponent
                        restricted={true}
                        path="/login"
                        component={Login}
                    />

                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
