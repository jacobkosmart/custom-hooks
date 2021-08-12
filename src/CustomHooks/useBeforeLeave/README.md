# @jacob-hooks/use-before-leave

React Hook to execute a function when the mouse leaves the page. Useful to show a popup or for analytics.

## installation

### yarn

`yarn add @jacob-hooks/use-before-leave`

### npm

`npm i @jacob-hooks/use-before-leave`

## Usage

```js
import React from "react";
import useBeforeLeave from "@jacob-hooks/use-before-leave";

function App() {
  const beforeLeave = () => console.log("User is leaving...");
  useBeforeLeave(beforeLeave);
  return <h1>Hello Nooks</h1>;
}
```

### Arguments

| Argument    | Type   | Description                                                              | Required |
| ----------- | ------ | ------------------------------------------------------------------------ | -------- |
| beforeLeave | string | When the mouse leaves the page. Useful to show a popup or for analytics. | yes      |
