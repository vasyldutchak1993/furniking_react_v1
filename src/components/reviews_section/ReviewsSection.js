import React from 'react';
import SectionTitle from "../section_title/SectionTitle";
import customerLogo from "../../assets/img/customer.png";
import {CarouselSlider} from "../sliders/CarouselSlider";
import ReviewCard from "../review_card/ReviewCard";
import {SliderWrapper} from "./reviewsSection.styled";

const dataItems = [
    {
        id: "1",
        img: customerLogo,
        userName: "Angelina Joly",
        text: "I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
        occupation: "Co-founder"
    },{
        id: "2",
        img: customerLogo,
        userName: "Vasyl Dutchak",
        text: "I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
        occupation: "Co-founder"
    },{
        id: "3",
        img: customerLogo,
        userName: "Ulija Hrynevuch",
        text: "I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
        occupation: "Co-founder"
    }
]

function ReviewsSection(props) {
    return (
        <>
            <SectionTitle>What Our Customer Says</SectionTitle>
            <SliderWrapper>
                <CarouselSlider infinite>
                    {dataItems.map(({id,img,text,occupation,userName})=>(
                        <CarouselSlider.Page key={id}>
                            <ReviewCard id={id} img={img} text={text} occupation={occupation} userName={userName}/>
                        </CarouselSlider.Page>
                    ))}
                </CarouselSlider>
            </SliderWrapper>

        </>
    );
}

export default ReviewsSection;