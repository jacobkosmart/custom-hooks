# @jacob-hooks/use-title

React Hook to update your document's title.

## installation

### yarn

`yarn add @jacob-hooks/use-title`

### npm

`npm i @jacob-hooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@jacob-hooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |
