import React from 'react';
import useWebTItle from '../../hooks/useWebTItle';

const MyTask = () => {
    useWebTItle('My All Task')
    return (
        <div>
            <h1>My All Task</h1>
        </div>
    );
};

export default MyTask;