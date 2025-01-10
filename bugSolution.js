```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = () => console.log('Count changed:', count);
    logCount(); // Log on mount
    // Cleanup function to execute before unmount or on next effect execution
    return () => {
      console.log('Cleaning up...');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```