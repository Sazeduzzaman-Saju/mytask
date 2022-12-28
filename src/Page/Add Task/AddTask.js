import React from 'react';
import useWebTItle from '../../hooks/useWebTItle';

const AddTask = () => {
    useWebTItle('Add A Task')
    return (
        <div>
            <h1>This is Add Task</h1>
        </div>
    );
};

export default AddTask;