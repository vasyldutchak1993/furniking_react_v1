import PropTypes from 'prop-types';
import React, {useContext} from "react";
import {BasketItemStyled} from "./basketItem.styled";
import ProductCard from "../product_card/ProductCard";
import {currencyContext} from "../../contexts/currencyContext";
import ButtonQuantityCounter from "../quantity_counter/ButtonQuantityCounter";
import {FaMinus, FaPlus} from "react-icons/fa";
import {basketContext} from "../../contexts/basketContext";
import { IoMdRemove} from "react-icons/io";

function BasketItem({serial,quantity,price,total,img,productTitle,chip,rating,id,productType,productPrice}) {
    const {currency} = useContext(currencyContext)
    const {addToBasket,removeFromBasket,removeAllCategory}=useContext(basketContext)

    const handleIncreaseQuantity = (product) => {
      addToBasket(product)
    }

    const handleDecreaseQuantity = (product) => {
      removeFromBasket(product)
    }

    const removeAll = (productCategory) => {
        removeAllCategory(productCategory)
    }

    return (
        <BasketItemStyled className='row'>
            <div className="serial_number">
                <ButtonQuantityCounter onClick={()=>{
                    removeAll({serial,quantity,price,total,img,productTitle,chip,rating,id,productType,productPrice})
                }}>
                    <IoMdRemove/>
                </ButtonQuantityCounter>
            </div>
            <div className="product">
                <ProductCard productTitle={productTitle} chip={chip} img={img} price={productPrice} rating={rating} id={id} productType={productType}/>
            </div>
            <div className="quantity">
                <ButtonQuantityCounter onClick={()=>{
                    handleDecreaseQuantity({serial,quantity,price,total,img,productTitle,chip,rating,id,productType,productPrice})
                }}>
                    <FaMinus/>
                </ButtonQuantityCounter>
                <div className="quantity_value">
                    {quantity}
                </div>
                <ButtonQuantityCounter onClick={()=>{
                    handleIncreaseQuantity({serial,quantity,price,total,img,productTitle,chip,rating,id,productType,productPrice})
                }}>
                    <FaPlus/>
                </ButtonQuantityCounter>
            </div>
            <div className="price">{currency}{price}</div>
            <div className="total">{currency}{total}</div>
        </BasketItemStyled>
    );
}

BasketItem.propTypes = {
    serial:PropTypes.number,
    quantity:PropTypes.number.isRequired,
    price:PropTypes.string.isRequired,
    total:PropTypes.number.isRequired,
    img:PropTypes.string.isRequired,
    productTitle:PropTypes.string.isRequired,
    chip: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    productPrice:PropTypes.shape({
        currentPrice:PropTypes.string.isRequired,
        defaultPrice:PropTypes.string.isRequired,
    }).isRequired,
};

export default BasketItem;