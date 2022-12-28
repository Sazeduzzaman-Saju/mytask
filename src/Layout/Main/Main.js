import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Footer from '../../comps/Footer/Footer';
import Header from '../../comps/Header/Header';
import useWebTItle from '../../hooks/useWebTItle';


const Main = () => {
    useWebTItle('Sazeduzzaman | Home')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className='container'>
                        <div className='jus'>
                            <div className='justify-center flex h-full align-middle' style={{ height: '100vh' }}>
                                <PuffLoader color={'#4568dc'} loading={loading} size={150} />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <Header></Header>
                        <Outlet />
                        <Footer></Footer></>
            }
        </div>
    );
};

export default Main;