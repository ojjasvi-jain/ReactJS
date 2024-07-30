## What is the use Key props ?

- Key is a special props that we use to tell diffing algorithm that an element is unique
- It allowing react to distinguish between multiple instances of the same ` component type`
- When a key changes between renders , the element will be destryed and new one will be created ( even if the position in the tree is the same as before )

## How to style react element

There are two primary ways to style react components

1. Inline styles with the `style` prop
2. Regular CSS with the `className` prop

- In HTML you'd pass a string of CSS:

```html
<div style="margin-top: 20px; background-color: blue;"></div>
```

- In React, you'll pass an object of CSS:

```jsx
<div style={{ marginTop: 20, backgroundColor: "blue" }} />
```

## What are react Hooks ?

- A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

## Why do we need `useState Hook`?

- `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
  The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook

```
const [state, setState] = useState(initialstate);
```

---

#### Importing: To use useState you need to import useState from react as shown below:

```
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

## Component are pure function

- component must be pure when it comes to render logic : given the same props (input), a component instance should always return the same jsx(output)

- Render logic must produce no side effects : no interaction with the outside world is allowed
  - Do Not perform network request
  - Do Not start timers
  - Do not directly use DOM apis
  - DO not mutate objects or varible outside of the function scope
  - Do not update state (or refs): this will create an infinite loop!

Side effects are allowed in event handlers function!
there is also a special hook to register side effects
