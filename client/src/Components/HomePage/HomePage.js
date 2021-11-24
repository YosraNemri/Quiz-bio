import FeatureBlock from "./FeatureBlock/FeatureBlock";
import HomeBanner from "./HomeBanner/HomeBanner";
import { Helmet } from "react-helmet";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner />
            <FeatureBlock />
        </div>
    );
};

export default HomePage;
