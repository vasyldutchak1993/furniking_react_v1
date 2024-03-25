import styled from "styled-components";

export const TestimonialSliderContainer=styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    background: rgb(96,210,194);
    background: linear-gradient(90deg, rgba(96,210,194,0.896796218487395) 47%, rgba(20,194,142,0.9164040616246498) 100%);
    
    .testimonial_card{
        background: linear-gradient(103.4deg, rgba(241, 250, 255, 0.88) 0.89%, #F1FAFF 101.61%);
        display: flex;
        column-gap: 50px;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 50px;
        .testimonial_card_img{
            img{
                display: block;
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }
        .testimonial_card_body{
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            flex-basis: 40%;
            .testimonial_card_collection{
                font-family: "Rubik";
                font-size: 22px;
                font-weight: 400;
                line-height: 26px;
                letter-spacing: 0.05em;
                text-align: left;
                color: ${props=>props.theme.colors.green};
            }
            .testimonial_card_title{
                font-family: "Rubik";
                font-size: 40px;
                font-weight: 500;
                line-height: 47px;
                letter-spacing: 0em;
                text-align: left;
                color: ${props=>props.theme.colors.primaryText};
            }
            .testimonial_card_discount{
                font-family: "Mulish";
                font-size: 27px;
                font-weight: 600;
                line-height: 26px;
                letter-spacing: 0em;
                text-align: left;
                color: rgba(81, 81, 81, 0.71);
                margin: 5px 0;
            }
            .btn_shop{
                font-family: "Mulish";
                font-size: 16px;
                font-weight: 700;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: left;
                height: 40px;
                width: max-content;
                padding: 0 15px;
                border-radius: 5px;
                background: ${props=>props.theme.colors.green};
                color: ${props=>props.theme.colors.white};
                border: none;
                &:hover{
                    cursor: pointer;
                }
            }

        }
    }

`
export const TestimonialSliderWindowView=styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`
export const TestimonialSliderPagesContainer=styled.div`
    height: 100%;
    transition: all 1s;
    .active{
        transform: scale(1) !important;
    }
`

export const TestimonialSliderControlsContainer=styled.div`
    
`
export const TestimonialSliderThumbsContainer=styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);

    .thumb {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 98px;
        padding: 5px 0;
        border: 2px solid rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.56) 100%);

        &:hover {
            cursor: pointer;
        }

        .image_container {
            img {
                display: block;
                max-width: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
        .price {
            font-family: "Rubik";
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0em;
            text-align: left;
            color: ${props=>props.theme.colors.green};
        }
        .category{
            font-family: "Rubik";
            font-size: 7px;
            font-weight: 500;
            letter-spacing: 0em;
            text-align: left;
            color: ${props=>props.theme.colors.primaryText};
        }
    }
`