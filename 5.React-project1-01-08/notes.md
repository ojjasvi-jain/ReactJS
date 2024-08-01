## How to quickly host website on netlify

- follow this steps https://medium.com/swlh/the-easiest-way-to-deploy-a-react-app-c7e613035822

## Why do we need a `useEffect Hook`

-`useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

1.

```jsx
useEffect(() => {}, []);
```

The `() => {}` is callback function and `[]` is called a empty dependency array.

if we pass `[]` empty dependency array then `() => {}` callback function will going to call only 1 time after first time UI rendering

2.

```jsx
useEffect(() => {
  setCurrentState("true");
}, [currentState]);
```

If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function whenever `currentState` dependency changed

3.

```jsx
useEffect(() => {});
```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered/rerender.

## What is `Conditional Rendering`? explain with a code example.

- `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:

```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};


// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}


// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```
