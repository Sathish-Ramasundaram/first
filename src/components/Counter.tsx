import { useState } from "react";

function Counter () {

    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>Counter Value: {count}</p>

        </div>
    );
}

export default Counter;