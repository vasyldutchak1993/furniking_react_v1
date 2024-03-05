import {createContext, useState} from "react"
import {CURRENCY_VALUES} from "../utils/currencyValues";

export const currencyContext = createContext(CURRENCY_VALUES.USD)

const CurrencyContext = ({children}) => {
    const [currency, setCurrency] = useState(CURRENCY_VALUES.USD)

    const switchCurrency = (value) => {
        setCurrency(value)
    }

    return (
        <currencyContext.Provider value={{currency,switchCurrency}}>
            {children}
        </currencyContext.Provider>
    )
}

export default CurrencyContext