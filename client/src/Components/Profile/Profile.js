import "./Profile.css";
import Loader from "react-loader-spinner";
import { Helmet } from "react-helmet";
const Profile = ({ info }) => {
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="Profile">
                {info !== undefined ? (
                    <div className="profile-info">
                        <p>
                            Username : <span>{info.userName}</span>{" "}
                        </p>
                        <p>
                            Email : <span>{info.email}</span>
                        </p>
                        <p>
                            Microscopy Quiz Score :{" "}
                            <span>{info.microscopyPoint}</span>
                        </p>
                        <p>
                            Component Quiz Score :{" "}
                            <span>{info.componentPoints}</span>
                        </p>
                    </div>
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
        </>
    );
};

export default Profile;
