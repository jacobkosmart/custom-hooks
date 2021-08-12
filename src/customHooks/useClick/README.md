# @jacob-hooks/use-click

React Hook to execute a function when the mouse click then add event listener

## installation

### yarn

`yarn add @jacob-hooks/use-click`

### npm

`npm i @jacob-hooks/use-click`

## Usage

```js
import React from "react";
import useClick from "@jacob-hooks/use-click";

const App = () => {
  const sayHello = () => console.log("Say Hello");

  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};
```

### Arguments

| Argument | Type   | Description                           | Required |
| -------- | ------ | ------------------------------------- | -------- |
| click    | string | The mouse click then add event lister | yes      |
