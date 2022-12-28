import React from 'react';
import useWebTItle from '../../hooks/useWebTItle';

const CompletedTask = () => {
    useWebTItle('My Completed Task')
    return (
        <div>
            <h1>This is
                CompletedTask</h1>
        </div>
    );
};

export default CompletedTask;