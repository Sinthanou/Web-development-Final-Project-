import React, { createContext, useState, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
    const [sideBar, setSideBar] = useState(false)
    const [productDetail, setProductDetail] = useState({})
    const [cart, setCart] = useState([])

    return (
        <MyContext.Provider value={
            {
                sideBar,
                setSideBar,
                productDetail,
                setProductDetail,
                cart,
                setCart
            }}>
            {children}
        </MyContext.Provider>
    );
};

// Custom hook to use the context
const useMyContext = () => {
    const context = useContext(MyContext);

    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider');
    }

    return context;
};

export { MyProvider, useMyContext };