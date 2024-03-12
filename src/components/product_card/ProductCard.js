import PropTypes from 'prop-types';
import {ProductCardContainer} from "./productCard.styled";
import {useContext, useEffect, useState} from "react";
import {currencyContext} from "../../contexts/currencyContext";
import {FaRegHeart} from "react-icons/fa";
import {RxUpdate} from "react-icons/rx";
import {MdAddShoppingCart, MdPreview} from "react-icons/md";
import {Link} from "react-router-dom";
import StarRating from "../rating/StarRating";
import {useLocalStorage} from "../../hooks/useLocalStorage";


function ProductCard({id, chip, img, productType, productTitle, price, rating}) {
    const FAVORITE_KEY = `favorite_${id}`
    const [favorite, setFavorite] = useLocalStorage(FAVORITE_KEY, null)
    const {currency} = useContext(currencyContext)
    const [isFavorite, setIsFavorite] = useState(favorite!==null)

    const toggleFavorites = ({id, chip, img, productType, productTitle, price, rating}) => {
        if (favorite) {
            setFavorite(null)
            setIsFavorite(false)
        } else {
            setFavorite({id, chip, img, productType, productTitle, price, rating})
            setIsFavorite(true)
        }
    }



    return (
        <ProductCardContainer>
            <div className="product_card_header_container">
                <img src={img} alt={productTitle}/>
                <div className="product_card_actions_container">
                    <div className="product_action_item">
                        <FaRegHeart className={isFavorite ? 'item_favorite' : ''} onClick={() => {
                            toggleFavorites({id, chip, img, productType, productTitle, price, rating})
                        }}/>
                    </div>
                    <div className="product_action_item">
                        <MdAddShoppingCart/>
                    </div>
                    <div className="product_action_item">
                        <RxUpdate/>
                    </div>
                    <div className="product_action_item">
                        <MdPreview/>
                    </div>
                </div>
            </div>
            <div className="product_card_type">{productType}</div>
            <Link to={`products/${id}`} className="product_card_title">{productTitle}</Link>
            <div className="product_card_box">
                <div className="product_card_price_box">
                    <div className="product_card_currentPrice">{currency}{price.currentPrice}</div>
                    <div className="product_card_defaultPrice">{currency}{price.defaultPrice}</div>
                </div>
                <div className="product_card_rating_box">
                    <StarRating rate={rating}/>
                </div>
            </div>
            <div className={`product_card_chip_container ${chip.type}`}>
                {chip.value}
            </div>

        </ProductCardContainer>
    );
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    chip: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired,
    img: PropTypes.string.isRequired,
    productType: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
        defaultPrice: PropTypes.string.isRequired,
        currentPrice: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
};

export default ProductCard;