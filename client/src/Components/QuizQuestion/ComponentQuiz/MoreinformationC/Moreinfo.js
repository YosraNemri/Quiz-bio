import "./Moreinfo.css";
const MoreInfo = ({ moreInformation, setShow, setShowAnswer, images }) => {
    const info1 = images.find((el) => el.name === moreInformation[0]);
    const info2 = images.find((el) => el.name === moreInformation[1]);
    const TotalInfo = [info1, info2];
    const handleBack = () => {
        setShow(false);
        setShowAnswer(true);
    };
    return (
        <>
            <div id="information">
                {TotalInfo.map((info) => (
                    <>
                        <div className="details">
                            <img
                                src={`https://res.cloudinary.com/project001/image/upload/v1633444216/quiz/${info.name}.jpg`}
                                alt="imgInformation"
                                width="250px"
                                height="250px"
                            />
                            <br />
                            <span>Cell Type</span>
                            <p>{info.celltype}</p>
                            <span>Component</span>
                            <p>{info.component}</p>
                            <span>Organism</span>
                            <p>{info.organism}</p>
                            <span>DOI</span>
                            <p>{info.doi}</p>
                        </div>
                        <div className="details">
                            <span>Microscopy : </span>
                            <p>{info.mode}</p>
                            <span>Description</span>
                            <p id="description">{info.description}</p>
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

export default MoreInfo;
