import React from 'react';
import {FurnitureContainer} from "./furniture.styled";
import FurnitureCard from "./FurnitureCard";
import furnitureImgBig from './../../assets/img/furniture_big.png'
import furnitureImgTop from './../../assets/img/furniture_top.png'
function FurnitureSection(props) {
    return (
        <>
            <FurnitureContainer>
                <FurnitureCard img={furnitureImgBig} title='Modern Furniture Collections' subTitle='Starting from $500' id='1' className='card_big'/>
                <FurnitureCard img={furnitureImgTop} title='Geometric Bookcase' subTitle='Up to 20% discount' id='2' className='card_small_top'/>
                <FurnitureCard img={furnitureImgTop} title='Minimal Sofa collections' subTitle='Sale upto 40% discount' id='3' className='card_small_bottom'/>
            </FurnitureContainer>
        </>
    );
}

export default FurnitureSection;