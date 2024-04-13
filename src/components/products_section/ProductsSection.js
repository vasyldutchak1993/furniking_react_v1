import React from 'react';
import SectionTitle from "../section_title/SectionTitle";
import ProductsView from "../products_list_view/ProductsView";
import Tabs from "../tab/Tabs";
const tabs = [
    {
        label: "sofa",
        component: <ProductsView productsType='sofa' key={'sofa'}/>
    },{
        label:"new",
        component: <ProductsView productsType='new' key={'new'}/>
    },{
        label: "furniture",
        component: <ProductsView productsType='furniture' key={'furniture'}/>
    },{
        label: "tabble",
        component: <ProductsView productsType='tabble' key={'tabble'}/>
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