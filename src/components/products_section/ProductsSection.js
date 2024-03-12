import React from 'react';
import SectionTitle from "../section_title/SectionTitle";
import ProductsView from "../products_list_view/ProductsView";
import Tabs from "../tab/Tabs";
const tabs = [
    {
        label: "All Products",
        component: <ProductsView productsType='Sofa'/>
    },{
        label:"Best Sellers",
        component: <ProductsView productsType='Tabble'/>
    },{
        label: "New Arrivals",
        component: <ProductsView productsType='Chair'/>
    },{
        label: "Todays Deals",
        component: <ProductsView productsType='Furniture'/>
    }
]
function ProductsSection(props) {
    return (
        <>
            <SectionTitle>OUR PRODUCTS</SectionTitle>
            <Tabs data={tabs}/>
        </>
    );
}

export default ProductsSection;