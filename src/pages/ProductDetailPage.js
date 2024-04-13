import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SectionTitle from "../components/section_title/SectionTitle";
import ProductCard from "../components/product_card/ProductCard";
import {getProductById} from "../services";

function ProductDetailPage(props) {
    const [product,setProduct]=useState(null)
    const {id} = useParams()
    useEffect(()=>{
        getProductById(id)
            .then(response=>setProduct(response.data))
            .catch(console.log)
    },[])

    return (
        <>
            <SectionTitle>Product info</SectionTitle>
            {product && <ProductCard productTitle={product.productTitle}
                                     chip={product.chip}
                                     img={product.img}
                                     price={product.price}
                                     rating={product.rating}
                                     id={product.id}
                                     productType={product.productType}/>}
        </>
    );
}

export default ProductDetailPage;