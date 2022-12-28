import React from 'react';
import useWebTItle from '../../hooks/useWebTItle';

const Home = () => {
    useWebTItle('Home')
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;