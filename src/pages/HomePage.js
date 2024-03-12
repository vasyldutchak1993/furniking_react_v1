import FeatureSection from "../components/feature_section/FeactureSection";
import FurnitureSection from "../components/furniture_section/FurnitureSection";
import SpecialOfferSection from "../components/special_offer_section/SpecialOfferSection";
import ArticlesSection from "../components/articles_section/ArticlesSection";
import ProductsSection from "../components/products_section/ProductsSection";

function HomePage(props) {
    return (
        <>
            <FeatureSection/>
            <FurnitureSection/>
            <SpecialOfferSection/>
            <ArticlesSection/>
            <ProductsSection/>
        </>
    );
}

export default HomePage;