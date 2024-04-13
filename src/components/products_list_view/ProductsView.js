import PropTypes from 'prop-types';
import {PaginationContainer, ProductsListContainer} from "./productsView.styled";
import ProductCard from "../product_card/ProductCard";
import {useEffect, useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {getProductsByCategory} from "../../services";


function ProductsView({productsType}) {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages,setTotalPages]=useState(10)
    const [limit,setLimit]=useState(8)

    useEffect(() => {
        getProductsByCategory(productsType,currentPage,limit)
            .then(response=>setProducts(response.data))
            .catch(e=>{
                console.log(e)
            })
    }, [productsType,currentPage,limit,setProducts])

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

    return (
        <>
            <ProductsListContainer>
                {products.length > 0 && products.map(({productTitle, chip, img, price, rating, id, productType}) => (
                    <ProductCard key={id} productTitle={productTitle} chip={chip} img={img} price={price}
                                 rating={rating} id={id} productType={productType}/>
                ))}
            </ProductsListContainer>
            <PaginationContainer>
                <button type='button' className='btn btn-link' onClick={handleIncrement}>
                    <span>Next page</span> <FaArrowRight/>
                </button>
                <span className='text'>Page</span>
                <div className='current_page'>
                    <input type="number" value={currentPage} onChange={handleChange}/>
                </div>
                <span className='text'>of {totalPages}</span>
                <div className="btn-pagination-box">
                    <button type='button' className='btn btn-pagination' onClick={handleDecrement}><IoIosArrowBack/></button>
                    <button type='button' className='btn btn-pagination' onClick={handleIncrement}><IoIosArrowForward/></button>
                </div>
            </PaginationContainer>
        </>
    );
}

ProductsView.propTypes = {
    productsType: PropTypes.string.isRequired
};

export default ProductsView;