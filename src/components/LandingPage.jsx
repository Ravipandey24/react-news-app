import React, { useState, useRef, useEffect } from 'react'


function LandingPage() {
    const [count, setCount] = useState(1)

    useEffect(() => {
        setCount(count + 1);
    }, []);

    return (
      <div className='flex justify-center'>
            <span>{count}</span>
            <button>counter</button>
      </div>
    )
}

export default LandingPage