import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(1);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCount((prevCount) => {
              if (prevCount < targetNumber) {
                return prevCount + 1;
              } else {
                clearInterval(interval);
                return prevCount;
              }
            });
          }, 100); // Adjust the interval time as needed
        }
      },
      {
        threshold: 0.1, // Adjust this value to control when the counter starts (0.1 means 10% of the counter is visible)
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetNumber]);

  return (
    <div className="count-number h2" ref={counterRef}>
            
            <span className="number count" data-count={160}>
                  {count}
                  </span>
                  <span className="symbol">+</span>
    </div>
  );
};

export default Counter;

    