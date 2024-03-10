import FeatureSection from "../components/feature_section/FeactureSection";
import FurnitureSection from "../components/furniture_section/FurnitureSection";
import SectionTitle from "../components/section_title/SectionTitle";
import SpecialOfferSection from "../components/special_offer_section/SpecialOfferSection";
import ArticlesSection from "../components/articles_section/ArticlesSection";

function HomePage(props) {
    return (
        <>
            <FeatureSection/>
            <FurnitureSection/>
            <SpecialOfferSection/>
            <ArticlesSection/>
        </>
    );
}

export default HomePage;