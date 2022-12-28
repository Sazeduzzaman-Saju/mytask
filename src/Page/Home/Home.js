import { PuffLoader } from 'react-spinners';
import useWebTItle from '../../hooks/useWebTItle';
import HomeBanner from './HomeBanner';
import Steps from './Steps';

const Home = () => {
    useWebTItle('Home');
    return (
        <section className=' mb-5'>
            <div>
                <HomeBanner></HomeBanner>
                <Steps></Steps>
            </div>
        </section>
    );
};

export default Home;