import { useEffect } from 'react';

const useWebTItle = title => {
    useEffect(() => {
        document.title = title;
    }, [title])
};

export default useWebTItle;