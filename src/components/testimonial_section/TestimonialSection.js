import React from 'react';
import TestimonialSlider from "../sliders/TestimonialSlider";
import img from '../../assets/img/furniture.png'
function TestimonialSection(props) {
    return (
        <>
            <TestimonialSlider>
                <div className='testimonial_card'>
                    <div className="testimonial_card_body">
                        <div className="testimonial_card_collection">TOP COLLECTIONS 2022</div>
                        <div className="testimonial_card_title">We Serve Your Dream Furniture</div>
                        <div className="testimonial_card_discount">Get 50% off all products</div>
                        <button className='btn_shop'>SHOP NOW</button>
                    </div>
                    <div className="testimonial_card_img">
                        <img src={img} alt="Furniture"/>
                    </div>
                </div>
                <div className='testimonial_card'>
                    <div className="testimonial_card_body">
                        <div className="testimonial_card_collection">TOP COLLECTIONS 2022</div>
                        <div className="testimonial_card_title">We Serve Your Dream Furniture</div>
                        <div className="testimonial_card_discount">Get 50% off all products</div>
                        <button className='btn_shop'>SHOP NOW</button>
                    </div>
                    <div className="testimonial_card_img">
                        <img src={img} alt="Furniture"/>
                    </div>
                </div>
                <div className='testimonial_card'>
                    <div className="testimonial_card_body">
                        <div className="testimonial_card_collection">TOP COLLECTIONS 2022</div>
                        <div className="testimonial_card_title">We Serve Your Dream Furniture</div>
                        <div className="testimonial_card_discount">Get 50% off all products</div>
                        <button className='btn_shop'>SHOP NOW</button>
                    </div>
                    <div className="testimonial_card_img">
                        <img src={img} alt="Furniture"/>
                    </div>
                </div>
            </TestimonialSlider>
        </>
    );
}

export default TestimonialSection;