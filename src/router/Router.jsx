import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../page/Home';
import ProductDetail from '../page/ProductDetail';
import Login from '../page/Login';
import SignIn from '../page/SignIn';
import Payment1 from '../page/Payment1';
import Payment2 from '../page/Payment2';
import HeaderLayout from '../components/HeaderLayout';

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login /> 
        },
        {
            path: "/sign-in",
            element: <SignIn/>
        },
        {
            path: "/home",
            element: (
                <HeaderLayout>
                    <Home />
                </HeaderLayout>
            ) 
        },
        {
            path: "/product-detail",
            element: (
                <HeaderLayout>
                    <ProductDetail />
                </HeaderLayout>
            )
        },
        {
            path: "/payment-1",
            element: (
                <HeaderLayout>
                    <Payment1 />
                </HeaderLayout>
            )
        },
        {
            path: "/payment-2",
            element: (
                <HeaderLayout>
                    <Payment2 />
                </HeaderLayout>
            )
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Router;
