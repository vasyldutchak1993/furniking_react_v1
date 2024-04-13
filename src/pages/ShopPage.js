import React, {useEffect, useMemo, useState} from 'react';
import {PaginationContainer, ProductsListContainer} from "../components/products_list_view/productsView.styled";
import ProductCard from "../components/product_card/ProductCard";
import SectionTitle from "../components/section_title/SectionTitle";
import {getAllProducts} from '../services'
import {FaArrowRight} from "react-icons/fa";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import ProductCardLoading from "../components/product_card/ProductCardLoading";
import {generateMockArray} from "../utils/mockGenerator";
import {LOADING_STATUS} from "../utils/loadingStatus";

function ShopPage(props) {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(3)
    const [loadingStatus,setLoadingStatus]=useState(LOADING_STATUS.IDLE)
    const [error,setError]=useState(null)
    const handleChange = (event) => {
        setCurrentPage(parseInt(event.target.value))
    }
    const handleIncrement = () => {
        if (currentPage >= totalPages) return
        setCurrentPage(prevState => prevState + 1)
    }
    const handleDecrement = () => {
        if (currentPage <= 1) return
        setCurrentPage(prevState => prevState - 1)
    }

    const getPreloadedCards = useMemo(() => {
        return generateMockArray(limit).map((_, idx) =>(<ProductCardLoading key={idx}/>))
    },[limit])


    useEffect(() => {
        setLoadingStatus(LOADING_STATUS.PENDING)
        getAllProducts(currentPage, limit)
            .then(response => {
                setProducts(response.data)
                setLoadingStatus(LOADING_STATUS.RESOLVED)
            })
            .catch(e => {
                setLoadingStatus(LOADING_STATUS.REJECTED)
                setError(e)
                console.log(e)
            })
    }, [currentPage, setProducts,limit,setLoadingStatus])

    return (
        <>
            <SectionTitle>OUR PRODUCTS</SectionTitle>
            {loadingStatus === LOADING_STATUS.IDLE && <ProductsListContainer>
                {getPreloadedCards}
            </ProductsListContainer>}
            {loadingStatus === LOADING_STATUS.PENDING && <ProductsListContainer>
                {getPreloadedCards}
            </ProductsListContainer>}
            {loadingStatus === LOADING_STATUS.RESOLVED && <ProductsListContainer>
                {products.length > 0 && products.map(({productTitle, chip, img, price, rating, id, productType}) => (
                    <ProductCard key={id} productTitle={productTitle} chip={chip} img={img} price={price}
                                 rating={rating} id={id} productType={productType}/>
                ))}
            </ProductsListContainer>}
            {loadingStatus === LOADING_STATUS.REJECTED && <h1>Ups some error {error.message}</h1>}
            <PaginationContainer>
                <button type='button' className='btn btn-link' onClick={handleIncrement}>
                    <span>Next page</span> <FaArrowRight/>
                </button>
                <span className='text'>Page</span>
                <div className='current_page'>
                    <input type="number" value={currentPage} onChange={handleChange} readOnly/>
                </div>
                <span className='text'>of {totalPages}</span>
                <div className="btn-pagination-box">
                    <button type='button' className='btn btn-pagination' onClick={handleDecrement}><IoIosArrowBack/>
                    </button>
                    <button type='button' className='btn btn-pagination' onClick={handleIncrement}><IoIosArrowForward/>
                    </button>
                </div>
            </PaginationContainer>
        </>
    );
}

export default ShopPage;