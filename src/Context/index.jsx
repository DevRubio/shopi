import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({children})=>{
    
    const [count, setCount] = useState(0)
    const [openProductDetail, setOpenProductDetail] = useState(false)

    const toggleOpenProductDetail = () => setOpenProductDetail(true)
    const toggleCloseProductDetail = () => setOpenProductDetail(false)

    const [productToShow, setProductToShow] = useState({})

    return(
        <Context.Provider value={{
            count,
            setCount,
            openProductDetail,
            toggleOpenProductDetail,
            toggleCloseProductDetail,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </Context.Provider>        
    )
}