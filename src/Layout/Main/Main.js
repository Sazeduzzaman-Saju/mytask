import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../comps/Footer/Footer';
import Header from '../../comps/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;