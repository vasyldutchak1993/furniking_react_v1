import React, {useEffect, useState} from 'react';
import SectionTitle from "../components/section_title/SectionTitle";
import {ProductsListContainer} from "../components/products_list_view/productsView.styled";
import ProductCard from "../components/product_card/ProductCard";
import {useLocalStorage} from "../hooks/useLocalStorage";
import ProductCardLoading from "../components/product_card/ProductCardLoading";

const FAVORITE_KEY = 'favorite_'

function FavoritePage(props) {
    const [items, setItems] = useState([])
    const [items_, setItems_] = useLocalStorage('item', [])

    useEffect(() => {
        const localStorageItems = {...localStorage}
        for (const localStorageItemsKey in localStorageItems) {
            if (localStorageItemsKey.startsWith(FAVORITE_KEY) && (typeof parseInt(localStorageItemsKey.charAt(FAVORITE_KEY.length))) === 'number') {
                const item = JSON.parse(localStorageItems[localStorageItemsKey])
                if (item !== null) setItems(prevState => [...prevState, item])
            }
        }
        console.log(items)
    }, [])

    const saveToLocalStorage = (value) => {
        const find = items_.find(el => el.id === value.id)
        if (find) {
            setItems_(prevSate => [...prevSate.filter(el => el.id != value.id)])
        } else {
            setItems_(prevState => [...prevState, value])
        }
    }

    return (
        <>
            <SectionTitle>My Favorites</SectionTitle>
            <ProductsListContainer>
                {items.length > 0 && items.map(({productTitle, chip, img, price, rating, id, productType}) => (
                    <ProductCard key={id}
                                 productTitle={productTitle}
                                 chip={chip}
                                 img={img}
                                 price={price}
                                 rating={rating}
                                 id={id}
                                 productType={productType}
                    />
                ))}
            </ProductsListContainer>
            <ProductsListContainer>
                <ProductCardLoading/>
                <ProductCardLoading/>
                <ProductCardLoading/>
                <ProductCardLoading/>
            </ProductsListContainer>

            <button onClick={() => {
                saveToLocalStorage({id:1})
            }}>1
            </button>
            <button onClick={() => {
                saveToLocalStorage({id:2})
            }}>2
            </button>
            <button onClick={() => {
                saveToLocalStorage({id:3})
            }}>3
            </button>
            <button onClick={() => {
                saveToLocalStorage({id:4})
            }}>4
            </button>
        </>
    );
}

export default FavoritePage;