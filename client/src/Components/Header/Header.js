import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { isLoggedIn } from "../../utils";
import Loader from "react-loader-spinner";

import "./Header.css";
const Header = ({ info }) => {
    const history = useHistory();

    // function log out
    const logOut = () => {
        localStorage.clear();
        history.push("/");
        history.go(0);
    };

    return (
        <div className="nav">
            <div className="menu">
                <div className="Logo">
                    <Link to="/">Microscopy Quiz</Link>
                </div>

                {!isLoggedIn() ? (
                    <div className="Auth-btn">
                        <Link className="login-btn" to="/login">
                            Login
                        </Link>

                        <Link className="register-btn" to="/register">
                            Register
                        </Link>
                    </div>
                ) : info === undefined || info === null ? (
                    <Loader
                        type="Circles"
                        color="#f53838"
                        height={60}
                        width={60}
                    />
                ) : (
                    <div className="info">
                        <Link to="/profile" className="profile-link">
                            <h2>{info.userName}</h2>
                        </Link>
                        <h2>Score : {info.totalPoints}</h2>
                        <button onClick={logOut}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
