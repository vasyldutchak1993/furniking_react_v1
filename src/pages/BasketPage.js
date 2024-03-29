import React, {useContext} from 'react';
import {basketContext} from "../contexts/basketContext";
import BasketContainer from "../components/containers/BasketContainer";
import BasketItem from "../components/basketItem/BasketItem";
import {currencyContext} from "../contexts/currencyContext";

function BasketPage(props) {
    const {items,summaryPrice} = useContext(basketContext)
    const {currency}=useContext(currencyContext)
    return (
        <BasketContainer>
            <div className="table_header">
                <div className="serial_number">action</div>
                <div className="product">product</div>
                <div className="quantity">quantity</div>
                <div className="price">price</div>
                <div className="total">total</div>
            </div>
            <div className="table_body">
                {items.map((el, idx) => (
                    <BasketItem price={el.price.currentPrice}
                                total={el.total}
                                quantity={el.quantity}
                                serial={idx + 1}
                                key={el.id}
                                id={el.id}
                                chip={el.chip}
                                img={el.img}
                                productTitle={el.productTitle}
                                productType={el.productType}
                                rating={el.rating}
                                productPrice={el.price}

                    />))}
            </div>
            <div className='table_header d_flex'>Summary Price Order = <span className='price'>{currency}{summaryPrice}</span></div>
        </BasketContainer>
    );
}

export default BasketPage;