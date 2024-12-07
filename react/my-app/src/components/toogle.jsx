import React, { useState } from 'react';

function ToggleText() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <h1>#Question 2</h1>
            <button onClick={toggleVisibility}>Toggle Text</button>
            {isVisible && <p>This is the text to toggle!</p>}
        </div>
    );
}

export default ToggleText;
