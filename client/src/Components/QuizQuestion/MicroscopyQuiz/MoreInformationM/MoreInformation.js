import "./MoreInformation.css";
const MoreInformation = ({
    moreInformation,
    setShow,
    setShowAnswer,
    images,
}) => {
    const info1 = images.find((el) => el.name === moreInformation[0]);
    const info2 = images.find((el) => el.name === moreInformation[1]);
    const info3 = images.find((el) => el.name === moreInformation[2]);
    const TotalInfo = [info1, info2, info3];
    const handleBack = () => {
        setShow(false);
        setShowAnswer(true);
    };
    return (
        <>
            <div class="container">
                {TotalInfo.map((info) => (
                    <>
                        <div class="card">
                            <div className="details-content">
                                <h3 class="title"> {info.mode}</h3>
                                <div className="display-details">
                                    <img
                                        src={`https://res.cloudinary.com/project001/image/upload/v1633444216/quiz/${info.name}.jpg`}
                                        alt="imgInformation"
                                        width="200px"
                                        height="200px"
                                    />
                                    <div className="infos">
                                        <span className="content-span">
                                            Cell Type
                                        </span>
                                        <p>{info.celltype}</p>
                                        <span className="content-span">
                                            Component
                                        </span>
                                        <p>{info.component}</p>
                                        <span className="content-span">
                                            Organism
                                        </span>
                                        <p>{info.organism}</p>
                                        <span className="content-span">
                                            DOI
                                        </span>
                                        <p>{info.doi}</p>
                                    </div>
                                </div>
                                <div className="info-details">
                                    <span className="content-span">
                                        Description{" "}
                                    </span>
                                    <span className="details-span">
                                        {info.description}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <button id="back-btn" onClick={handleBack}>
                Back
            </button>
        </>
    );
};

export default MoreInformation;
