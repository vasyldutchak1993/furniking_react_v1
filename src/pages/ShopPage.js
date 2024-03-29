import React, {useEffect, useState} from 'react';
import {ProductsListContainer} from "../components/products_list_view/productsView.styled";
import ProductCard from "../components/product_card/ProductCard";
import product_1 from "../assets/img/product_1.png";
import product_2 from "../assets/img/product_2.png";
import product_3 from "../assets/img/product_3.png";
import product_4 from "../assets/img/product_4.png";
import product_5 from "../assets/img/product_5.png";
import product_6 from "../assets/img/product_6.png";
import product_7 from "../assets/img/product_7.png";
import SectionTitle from "../components/section_title/SectionTitle";
const data = [
    {
        id: "1",
        chip: {
            type: "sale",
            value: "Sale"
        },
        img: product_1,
        productType: "Chair",
        productTitle: "Minimal LCD chair",
        price: {
            defaultPrice: "250",
            currentPrice: "180"
        },
        rating: 5
    }, {
        id: "2",
        chip: {
            type: "new",
            value: "New"
        },
        img: product_2,
        productType: "Sofa",
        productTitle: "Modern Sofa",
        price: {
            defaultPrice: "150",
            currentPrice: "120"
        },
        rating: 4
    }, {
        id: "3",
        chip: {
            type: "discount",
            value: "-30%"
        },
        img: product_3,
        productType: "Sofa",
        productTitle: "Microfiber Sofa",
        price: {
            defaultPrice: "150",
            currentPrice: "130"
        },
        rating: 3
    }, {
        id: product_4,
        chip: {
            type: "sale",
            value: "Sale"
        },
        img: product_5,
        productType: "Tabble",
        productTitle: "Wood Coffee Tables",
        price: {
            defaultPrice: "120",
            currentPrice: "100"
        },
        rating: 4
    }, {
        id: product_5,
        chip: {
            type: "sale",
            value: "Sale"
        },
        img: product_6,
        productType: "Bench",
        productTitle: "Amalia Cowhide Bench",
        price: {
            defaultPrice: "150",
            currentPrice: "130"
        },
        rating: 5
    }, {
        id: "5",
        chip: {
            type: "new",
            value: "New"
        },
        img: product_6,
        productType: "Furniture",
        productTitle: "Delicia 3 Piece Living Room",
        price: {
            defaultPrice: "150",
            currentPrice: "120"
        },
        rating: 5
    }, {
        id: "6",
        chip: {
            type: "new",
            value: "New"
        },
        img: product_7,
        productType: "Storage",
        productTitle: "Juno-Hinged Lid Storage",
        price: {
            defaultPrice: "250",
            currentPrice: "235"
        },
        rating: 5
    }, {
        id: "7",
        chip: {
            type: "new",
            value: "New"
        },
        img: product_2,
        productType: "Sofa",
        productTitle: "Modern Sofa",
        price: {
            defaultPrice: "150",
            currentPrice: "120"
        },
        rating: 4
    }, {
        id: "8",
        chip: {
            type: "new",
            value: "New"
        },
        img: product_2,
        productType: "Sofa",
        productTitle: "Modern Sofa",
        price: {
            defaultPrice: "150",
            currentPrice: "120"
        },
        rating: 4
    }, {
        id: "9",
        chip: {
            type: "new",
            value: "New"
        },
        img: product_2,
        productType: "Sofa",
        productTitle: "Modern Sofa",
        price: {
            defaultPrice: "150",
            currentPrice: "120"
        },
        rating: 4
    },
]
function ShopPage(props) {
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(data)
    }, [])

    return (
        <>
            <SectionTitle>OUR PRODUCTS</SectionTitle>
            <ProductsListContainer>
                {products.length > 0 && products.map(({productTitle, chip, img, price, rating, id, productType}) => (
                    <ProductCard key={id} productTitle={productTitle} chip={chip} img={img} price={price}
                                 rating={rating} id={id} productType={productType}/>
                ))}
            </ProductsListContainer>
        </>
    );
}

export default ShopPage;