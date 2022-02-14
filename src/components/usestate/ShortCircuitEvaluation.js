import React, {useState} from 'react';

const ShortCircuitEvaluation = () => {
    const [demo, setDemo] = useState('');
    setDemo('hi')
    let a = 'try'
    return <div>
        <div>{ demo || <> 
            <div>Hello world</div>
            <div>am Abhishek</div>
        </>}</div> 
        <div>{ demo && a}</div> 
    </div>;
};

export default ShortCircuitEvaluation;
