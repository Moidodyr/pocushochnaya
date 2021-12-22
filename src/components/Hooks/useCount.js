import {useState} from 'react';

const useCount = (startCount = 1) => {
    const [count, setCount] = useState(startCount);

    const onChange = e => setCount(e.target.value);

    return {count, setCount, onChange};
};

export default useCount;