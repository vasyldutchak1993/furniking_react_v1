import PropTypes from 'prop-types';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "./dropdown.styled";
import {useContext, useState} from "react";
import {currencyContext} from "../../contexts/currencyContext";
import {CURRENCY_VALUES} from "../../utils/currencyValues";

function TopBarDropdown(props) {
    const [activeValue,setActiveValue]=useState('English (USD)')
    const {switchCurrency} = useContext(currencyContext)

    const handleClick = (event) => {
        const value=event.target.getAttribute('data-value')
        const text=event.target.innerText
        switchCurrency(value)
        setActiveValue(text)
    }

    return (
        <Dropdown>
            <DropdownToggle>
                {activeValue}
            </DropdownToggle>

            <DropdownMenu>
                <DropdownItem data-value={CURRENCY_VALUES.USD} onClick={handleClick}>English (USD)</DropdownItem>
                <DropdownItem data-value={CURRENCY_VALUES.EU} onClick={handleClick}>EUROPE (EU)</DropdownItem>
                <DropdownItem data-value={CURRENCY_VALUES.HRN} onClick={handleClick}>UKRAINE (HRH)</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

TopBarDropdown.propTypes = {

};

export default TopBarDropdown;