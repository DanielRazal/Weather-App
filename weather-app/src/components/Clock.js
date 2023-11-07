import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    };

    const formattedTime = currentTime.toLocaleTimeString([], options).replace(/^0/, '');

    return (
        <span className="clock">
            {formattedTime}
        </span>
    );
}

export default Clock;
