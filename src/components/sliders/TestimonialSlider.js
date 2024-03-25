import PropTypes from 'prop-types';
import {
    TestimonialSliderContainer,
    TestimonialSliderControlsContainer,
    TestimonialSliderPagesContainer,
    TestimonialSliderThumbsContainer,
    TestimonialSliderWindowView
} from "./testimonialSlider.styled";
import {Children, cloneElement, useEffect, useRef, useState} from "react";
import img from '../../assets/img/furn_1.png'



function TestimonialSlider({children, controls}) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [windowHeight, setWindowHeight] = useState(500)
    const [activePageIdx, setActivePageIdx] = useState(0)
    const [thumbs, setThumbs] = useState([])
    const windowElRef = useRef(null)
    const UPPER_LIMIT = -((children.length - 1) * 100)
    const LOWER_LIMIT = 0

    useEffect(() => {
        setPages([...Children.map(children, (child, idx) => cloneElement(child, {
            style: {
                height: "inherit",
                transition: "all 1s",
                transform: "scale(.5)",
            },
            className: [`${idx === activePageIdx ? 'active' : ''} slides_item testimonial_card`]
        }))])

    }, [])


    const onNext = () => {
        if (offset <= UPPER_LIMIT) return
        setOffset(prevState => prevState - 100)
        setActivePageIdx(prevState => prevState + 1)
        const activeSlide = windowElRef.current.querySelector('.active')
        activeSlide.classList.remove('active')
        setTimeout(() => {
            activeSlide.nextElementSibling.classList.add('active')
        }, 100)
    }
    const onPrev = () => {
        if (offset >= LOWER_LIMIT) return
        setOffset(prevState => prevState + 100)
        setActivePageIdx(prevState => prevState - 1)
        const activeSlide = windowElRef.current.querySelector('.active')
        activeSlide.classList.remove('active')
        setTimeout(() => {
            activeSlide.previousElementSibling.classList.add('active')
        }, 100)
    }

    const handleClick = (idx) => {
        setActivePageIdx(idx)
        setOffset(-(idx * 100))
        const activeSlide = document.querySelector('.active')
        activeSlide.classList.remove('active')
        setTimeout(() => {
            const slides = document.querySelectorAll('.slides_item')
            slides[idx].classList.add('active')
        }, 100)
    }

    return (
        <TestimonialSliderContainer>
            <TestimonialSliderWindowView ref={windowElRef} style={{
                height: `${windowHeight}px`
            }}>
                <TestimonialSliderPagesContainer style={{
                    transform: `translateY(${offset}%)`
                }}>
                    {pages}
                </TestimonialSliderPagesContainer>
            </TestimonialSliderWindowView>
            {controls && <TestimonialSliderControlsContainer>
                <button onClick={onPrev}>prev</button>
                <button onClick={onNext}>next</button>
            </TestimonialSliderControlsContainer>}
            <TestimonialSliderThumbsContainer>
                {pages.map((_, idx) => (<div className='thumb' key={idx} onClick={() => {
                    handleClick(idx)
                }}>
                    <div className="image_container">
                        <img src={img} alt="furniture"/>
                    </div>
                    <div className="price">$120</div>
                    <div className="category">Dining chairs</div>
                </div>))}
            </TestimonialSliderThumbsContainer>
        </TestimonialSliderContainer>
    );
}

TestimonialSlider.propTypes = {
    children: PropTypes.node.isRequired
};

export default TestimonialSlider;