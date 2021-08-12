# @jacob-hooks/use-input

React Hook to update input event

## installation

### yarn

`yarn add @jacob-hooks/use-input`

### npm

`npm i @jacob-hooks/use-input`

## Usage

```js
import React from "react";
import useInput from "@jacob-hooks/use-input";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```

### Arguments

| Argument     | Type     | Description  | Required |
| ------------ | -------- | ------------ | -------- |
| initialValue | string   | InitialValue | yes      |
| validator    | function | Name Value   | null     |
