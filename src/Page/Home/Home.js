import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import useWebTItle from '../../hooks/useWebTItle';
import HomeBanner from './HomeBanner';
import Steps from './Steps';

const Home = () => {
    useWebTItle('Home');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }, [])
    return (
        <div>
            {loading ?
                <div className='mx-w-full-xl mx-auto'>
                    <div class="grid grid-cols-1 place-items-center">
                        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <PuffLoader color={'#000'} loading={loading} size={150} />
                        </div>
                    </div>
                </div>
                :
                <section className='mx-w-full-xl mb-5'>
                    <div>
                        <HomeBanner></HomeBanner>
                        <Steps></Steps>
                    </div>
                </section>}
        </div>
    );
};

export default Home;