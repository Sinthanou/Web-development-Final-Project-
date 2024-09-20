import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../page/Home';
import ProductDetail from '../page/ProductDetail';
import Login from '../page/Login';
import Layout from '../layout/layout';
import SignIn from '../page/SignIn';
import Payment1 from '../page/Payment1';
import Payment2 from '../page/Payment2';

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
                <Layout>
                    <Home />
                </Layout>
            ) 
        },
        {
            path: "/product-detail",
            element: (
                <Layout>
                    <ProductDetail />
                </Layout>
            )
        },
        {
            path: "/payment-1",
            element: (
                <Layout>
                    <Payment1 />
                </Layout>
            )
        },
        {
            path: "/payment-2",
            element: (
                <Layout>
                    <Payment2 />
                </Layout>
            )
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Router;
