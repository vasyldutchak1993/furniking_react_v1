import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa";
import {SearchFormStyled} from "./searchForm.styled";
import IconButton from "../icon_button/IconButton";
import {useEffect, useState} from "react";

function SearchForm({onSubmit}) {

    const [currentCategory, setCurrentCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const handleSelectChange = (event) => {
        setCurrentCategory(event.currentTarget.value)
    }

    useEffect(()=>{
        onSubmit({searchQuery,currentCategory})
    },[searchQuery,currentCategory,onSubmit])

    const handleInput = (event) => {
        setSearchQuery(event.currentTarget.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({currentCategory, searchQuery})
    }

    return (
        <SearchFormStyled className='search_form_container'>
            <form onSubmit={handleSubmit} className='search_form'>
                <div className="input_container border_right w-100">
                    <input type="text" name='searchQuery' placeholder='Search here' value={searchQuery}
                           onChange={handleInput}/>
                </div>
                <div className="input_container">
                    <select name="categories" id="categories" className='categories' value={currentCategory}
                            onChange={handleSelectChange}>
                        <option value="all">Categories</option>
                        <option value="new">New Arrivals</option>
                        <option value="furniture">Furniture</option>
                        <option value="tabble">Tabble</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mirrors">Mirrors</option>
                        <option value="stools">Stools</option>
                        <option value="benches">Benches</option>
                    </select>
                </div>
                <div className="input_container">
                    <IconButton className={'btn_search_form'}>
                        <FaSearch/>
                    </IconButton>
                </div>
            </form>
        </SearchFormStyled>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchForm;