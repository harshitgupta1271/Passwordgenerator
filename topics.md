useEffect
Purpose: useEffect is used to handle side effects in functional components. Common side effects include data fetching, subscriptions, and manual DOM manipulations.
When it runs: The function passed to useEffect runs after the render is committed to the screen. By default, it runs both after the initial render and after every update. You can control this behavior with the dependency array.
Dependency Array: By providing a dependency array as the second argument, you can control when the effect runs:
An empty array ([]) means the effect runs only once, after the initial render.
Omitting the dependency array means the effect runs after every render.
Providing dependencies means the effect runs when any of those dependencies change.
useCallback
Purpose: useCallback is used to memoize functions in functional components. This is useful when you want to prevent unnecessary re-creation of functions on every render, which can help with performance optimization, especially when passing callbacks to child components.
How it works: It returns a memoized version of the callback function that only changes if one of the dependencies has changed.
Usage: Particularly useful in conjunction with React.memo or when you have expensive computations inside the callback that you want to avoid recalculating unnecessarily.
useRef
Purpose: useRef is used to persist values between renders without causing a re-render when the value changes. It can hold any mutable value, such as a DOM element reference or a mutable state.
How it works: It returns a mutable ref object whose .current property is initialized to the passed argument. The ref object stays the same between renders.
Common Use Cases:
Accessing or modifying DOM elements directly.
Storing mutable values that don't trigger a re-render when updated (e.g., a timer ID).
Creating instance-like variables in functional components.
These hooks help manage side effects, optimize performance, and handle mutable data effectively in functional React components.