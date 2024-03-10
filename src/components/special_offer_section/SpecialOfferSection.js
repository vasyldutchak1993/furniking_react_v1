import React from 'react';
import SectionTitle from "../section_title/SectionTitle";
import {OfferSectionContainer} from "./specialOfferSection.styled";
import OfferCard from "./OfferCard";
import offer_1Img from './../../assets/img/Offer_1.png'
import offer_2Img from './../../assets/img/offer_2.png'

const defaultValues = [
    {
        id:1,
        title: "Living Room Furniture",
        text: "You don't have a chair. Are you ready for growth? Shop with us 40% discount!",
        img: offer_1Img,
        alt: "Living Room Furniture",
        currentPrice: 150,
        defaultPrice: 250,
        chip: {
            type: "new",
            value: "40% off"
        },
        dateStart: {
            year: 2024,
            month: 3,
            days:10,
            hours: 12,
            minutes: 2,
            seconds: 1,
            date:'2024-03-08T03:24:20'
        },
        dateEnd: {
            year: 2024,
            month: 3,
            days:10,
            hours: 12,
            minutes: 2,
            seconds: 1,
            date:'2024-03-08T18:25:01'
        }
    },
    {
        id:2,
        title: "Modern chair",
        text: "Hot chairs of the modern era are now available in our stock.",
        img: offer_2Img,
        alt: "Modern chair",
        currentPrice: 75,
        defaultPrice: 150,
        chip: {
            type: "new",
            value: "50% off"
        },
        dateStart: {
            year: 2024,
            month: 3,
            days:10,
            hours: 12,
            minutes: 2,
            seconds: 1,
            date:'2024-03-08T03:24:27'
        },
        dateEnd: {
            year: 2024,
            month: 3,
            days:10,
            hours: 12,
            minutes: 2,
            seconds: 1,
            date:'2024-03-15T03:24:08'
        }
    }
]

function SpecialOfferSection(props) {
    return (
        <>
            <SectionTitle>SPECIAL OFFER</SectionTitle>
            <OfferSectionContainer>
                <OfferCard {...defaultValues[0]}/>
                <OfferCard {...defaultValues[1]}/>
            </OfferSectionContainer>
        </>
    );
}

export default SpecialOfferSection;