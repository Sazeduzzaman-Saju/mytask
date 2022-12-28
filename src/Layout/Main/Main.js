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

        }, 1000)
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className='mx-w-full-xl mx-auto'>
                        <div class="grid grid-cols-1 place-items-center">
                            <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                                <PuffLoader color={'#000'} loading={loading} size={150} />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <Header></Header>
                        <Outlet />
                        <Footer></Footer>
                    </>
            }
        </div>
    );
};

export default Main;