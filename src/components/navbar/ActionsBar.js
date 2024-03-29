import React, {useContext, useEffect, useMemo, useState} from 'react';
import ContentContainer from "../containers/ContentContainer";
import {ActionContainer, FlexContainer, SearchContainer} from "../containers/containers.styled";
import Logo from "../logo/Logo";
import SearchForm from "../search_form/SearchForm";
import {FaBell, FaShoppingBag, FaUser} from "react-icons/fa";
import IconButton from "../icon_button/IconButton";
import {basketContext} from "../../contexts/basketContext";
import {Navigate, useNavigate} from "react-router-dom";

const data = [
    {id: 1, title: "lorem", price: "$126",category:'chair'},
    {id: 2, title: "addem", price: "$126",category:'tabble'},
    {id: 3, title: "adf", price: "$126",category:'sofa'},
    {id: 4, title: "locdcrem", price: "$126",category:'new'},
    {id: 5, title: "locxvrem", price: "$126",category:'chair'},
    {id: 6, title: "lvcxvorem", price: "$126",category:'chair'},
    {id: 7, title: "lov vczrem", price: "$126",category:'chair'},
]

function ActionsBar(props) {
    const {items}=useContext(basketContext)
    const [query, setQuery] = useState('')
    const [currentCategory, setCurrentCategory] = useState('')
    const [categoryItems, setCategoryItems] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        setCategoryItems(data)
    }, [])
    const onSubmit = ({searchQuery, currentCategory}) => {
        setQuery(searchQuery)
        setCurrentCategory(currentCategory)
    }

    const filteredData = useMemo(() => {
        return categoryItems.filter(el => el.title.includes(query) && el.category===currentCategory)
    }, [query, categoryItems,currentCategory])

    return (
        <ContentContainer>
            <ActionContainer>
                <Logo/>
                <SearchContainer className="search_container">
                    <SearchForm onSubmit={onSubmit}/>
                    {query &&
                        <div className="data_search_view_container">
                            {filteredData.map(({id,title,price}) => (
                                <div key={id}>
                                    <h1>{title}</h1>
                                    <h4>{price}</h4>
                                </div>))}
                        </div>}
                </SearchContainer>
                <FlexContainer>
                    <IconButton chip={items.length} onClick={()=>{
                        navigate('/basket')
                    }}><FaShoppingBag/></IconButton>
                    <IconButton><FaBell/></IconButton>
                    <IconButton><FaUser/></IconButton>
                </FlexContainer>
            </ActionContainer>
        </ContentContainer>
    );
}

export default ActionsBar;