import "./ExploreImage.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
const ExploreImage = ({ images }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [ImageperPage] = useState(10);
    // Get current Image
    const indexOfLastPost = currentPage * ImageperPage;
    const indexOfFirstPost = indexOfLastPost - ImageperPage;
    const currentImages = images.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    const totalImages = images.length;

    for (let i = 1; i <= Math.ceil(totalImages / ImageperPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Helmet>
                <title>Images</title>
            </Helmet>
            <div className="Explore-image">
                {currentImages.map((image) => (
                    <div class="blog-card" key={image._id}>
                        <div class="meta">
                            <div
                                class="photo"
                                style={{
                                    backgroundImage: ` url(
                                    https://res.cloudinary.com/project001/image/upload/v1633444216/quiz/${image.name}.jpg
                                )`,
                                }}
                            ></div>
                            <ul class="details">
                                <li class="celltype">
                                    <span>{image.celltype}</span>
                                </li>
                                <li class="organism">
                                    <span>{image.organism}</span>
                                </li>
                                <li class="doi">
                                    <span>{image.doi}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1>{image.mode}</h1>
                            <h2>component : {image.component}</h2>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}

                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <a onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ExploreImage;
