import PropTypes from 'prop-types';
import ImageContainer from "./ImageContainer";
import {OfferCardContainer} from "./offerCard.styled";
import {useContext, useRef} from "react";
import {currencyContext} from "../../contexts/currencyContext";
import useCountdown from "../../hooks/useCountdown";
import {useNavigate} from "react-router-dom";


function OfferCard({title,text,img,alt,defaultPrice,currentPrice,dateStart,dateEnd,chip,id}) {
    const [days, hours, minutes, seconds,isExpire]=useCountdown(dateStart.date,dateEnd.date)
    const {currency} = useContext(currencyContext)
    const salesContainer = useRef(null);
    const navigate=useNavigate()

    return (
        <OfferCardContainer>
            <ImageContainer img={img} alt={alt}/>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            <div className="price_container">
                <div className="currentPrice">{currency}{currentPrice}</div>
                <div className="defaultPrice">{currency}{defaultPrice}</div>
                <button type='button' className='btn_offer' onClick={(event)=>{
                    navigate(`product/${id}`)
                }}>SHOP NOW</button>
            </div>
            <div className="sales_container" ref={salesContainer}>
                <div className={`sale_item ${isExpire ? 'animate':''}`}>
                    {days}
                    <div className="sale_item_label">days</div>
                </div>
                <div className={`sale_item ${isExpire ? 'animate':''}`}>
                    {hours}
                    <div className="sale_item_label">hrs</div>
                </div>
                <div className={`sale_item ${isExpire ? 'animate':''}`}>
                    {minutes}
                    <div className="sale_item_label">min</div>
                </div>
                <div className={`sale_item ${isExpire ? 'animate':''}`}>
                    {seconds}
                    <div className="sale_item_label">secs</div>
                </div>
            </div>
            <div className={`chip_container ${chip.type} animate_chip`}>
                {chip.value}
            </div>
        </OfferCardContainer>
    );
}

OfferCard.propTypes = {

};

export default OfferCard;