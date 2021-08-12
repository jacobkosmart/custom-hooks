# @jacob-hooks/use-confirm

React Hook to ask the user for a confirmation before executing a function.

## installation

### yarn

`yarn add @jacob-hooks/use-confirm`

### npm

`npm i @jacob-hooks/use-confirm`

## Usage

```js
import React from "react";
import useConfirm from "@jacob-hooks/use-confirm";

function App() {
  const deleteWorld = () => console.log("Deleting world...");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);
  return <button onClick={confirmDelete}>Delete the world</button>;
}
```

### Arguments

| Argument | Type     | Description                                                     | Required |
| -------- | -------- | --------------------------------------------------------------- | -------- |
| confirm  | function | To ask the user for a confirmation before executing a function. | yes      |
