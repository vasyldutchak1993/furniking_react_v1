import FeatureSection from "../components/feature_section/FeactureSection";
import FurnitureSection from "../components/furniture_section/FurnitureSection";
import SpecialOfferSection from "../components/special_offer_section/SpecialOfferSection";
import ArticlesSection from "../components/articles_section/ArticlesSection";
import ProductsSection from "../components/products_section/ProductsSection";
import ReviewsSection from "../components/reviews_section/ReviewsSection";
import React from "react";

function HomePage(props) {
    return (
        <>
            <FeatureSection/>
            <FurnitureSection/>
            <SpecialOfferSection/>
            <ProductsSection/>
            <ReviewsSection/>
            <ArticlesSection/>
        </>
    );
}

export default HomePage;