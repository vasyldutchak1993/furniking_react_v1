import {createContext, useEffect, useState} from "react"

export const basketContext = createContext([])

const BasketContext = ({children}) => {
    const [items, setItems] = useState([])
    const [summaryPrice,setSummaryPrice]=useState(0)

    useEffect(()=>{
        const summary=items.reduce((accumulator, currentValue) =>  parseInt(accumulator) + parseInt(currentValue.total),
            0,)
        setSummaryPrice(summary)
    },[items,setSummaryPrice])

    const addToBasket = (product) => {
        const isInBasket=items.find(el=>product.id===el.id)
        if (isInBasket){
            isInBasket.quantity+=1
            isInBasket.total=isInBasket.quantity*isInBasket.price.currentPrice
            setItems(prevState => [...prevState])
        }else {
            product.quantity=1
            product.total=product.price.currentPrice
            setItems(prevState => [...prevState, product])

        }
    }

    const removeFromBasket = (product) => {
        const isInBasket=items.find(el=>product.id===el.id)
        if (isInBasket && isInBasket.quantity>1){
            isInBasket.quantity-=1
            isInBasket.total=isInBasket.quantity*isInBasket.price.currentPrice
            setItems(prevState => [...prevState])
        }
    }

    const removeAllCategory = (product) => {
        const isInBasket=items.find(el=>product.id===el.id)
        if (isInBasket){
            setItems(prevState => [...prevState.filter(el=>el.id!== product.id)])
        }
    }

    return (
        <basketContext.Provider value={{items, addToBasket, removeFromBasket,removeAllCategory,summaryPrice}}>
            {children}
        </basketContext.Provider>
    )
}

export default BasketContext