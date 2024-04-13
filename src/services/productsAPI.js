import axios from "axios";

const BASE_URL = 'https://65be5084dcfcce42a6f23aa3.mockapi.io'

axios.defaults.baseURL = BASE_URL
export const getAllProducts = async (currentPage,limit) => {
    return await axios.get(`/products?page=${currentPage}&limit=${limit}`)
}
export const getProductById = async (id) => {
    return await axios.get(`/products/${id}`)
}
export const getProductsByCategory = async (category,currentPage,limit) => {
    return  await axios.get(`/products?category=${category}&page=${currentPage}&limit=${limit}`)
}