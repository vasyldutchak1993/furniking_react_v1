import styled from "styled-components";

export const CarouselStyled=styled.div`
   /* min-height: 350px;*/
    width: 100%;
    height: max-content;
    margin: 0 auto;
    position: relative;
    padding: 0 80px;
    
    .arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 60px;
        font-weight: bolder;
        color: rgba(204, 204, 204, 1);
        transition: .3s;
        
        &:hover{
            color: ${props=>props.theme.colors.primaryText};
        }
        
        &.left{
            left:0px;
        }
        &.right{
            right: 0px;
        }
    }
    
    .window{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .all_pages_container{
            height: 100%;
            display: flex;
            transition: translate;
            transition-property: transform;
            transition-duration: 300ms;
            transition-timing-function: ease-in-out;
        }
        
    }
    
    .item{
        display:flex;
        justify-content: center;
        align-items: center;
        user-select: none;   
        height: 100%;
    }
    .item_1{
        background: cornflowerblue;
    }
    .item_2{
        background: coral;
    }
    .item_3{
        background: darkolivegreen;
    }
    

`
export const PageContainer=styled.div`
    height: 100%;
    //    ---------------------------
    .slider_content{
        margin: 0 auto;
        position: relative;
        width: 100%;
        max-width: 816px;
        overflow: hidden;
        padding-top: 50px;

        .slider_item{
            position: relative;
            width: 100%;
            background: rgba(0, 0, 0, 0.05);
            padding: 80px 125px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 10px;

            .slide_item_image_container{
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%,-50%);
            }

            .slide_item_text{
                font-family: "DM Sans","Mulish";
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0.005em;
                text-align: center;
            }
            .slide_item_username{
                font-family: "Mulish";
                font-size: 24px;
                font-weight: 600;
                line-height: 29px;
                letter-spacing: 0.005em;
                text-align: center;

            }
            .slide_item_occupation{
                font-family: "Rubik";
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0.005em;
                text-align: center;
            }
        }

    }

    .slider_control {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 50px;
        color: ${props=>props.theme.colors.secondaryText};
        transition: color .3s;
        &:hover{
            color: ${props=>props.theme.colors.primaryText};
            cursor:pointer;
        }

    }
    .slider_control.control_left{
        left: 0;
    }
    .slider_control.control_right{
        right: 0;
    }
`