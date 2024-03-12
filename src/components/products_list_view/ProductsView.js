import PropTypes from 'prop-types';
import {PaginationContainer, ProductsListContainer} from "./productsView.styled";
import ProductCard from "../product_card/ProductCard";
import {useEffect, useState} from "react";
import product_1 from '../../assets/img/product_1.png'
import product_2 from '../../assets/img/product_2.png'
import product_3 from '../../assets/img/product_3.png'
import product_4 from '../../assets/img/product_4.png'
import product_5 from '../../assets/img/product_5.png'
import product_6 from '../../assets/img/product_6.png'
import product_7 from '../../assets/img/product_7.png'
import {FaArrowRight} from "react-icons/fa";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

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
        img: "",
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

function ProductsView({productsType}) {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages,setTotalPages]=useState(10)

    useEffect(() => {
        setProducts(data.filter(({productType}) => productType === productsType))
    }, [productsType])

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