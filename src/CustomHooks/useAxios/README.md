# @jacob-hooks/use-axios

React Hook to send HTTP request and get data from URL

# install

- yarn

`$ yarn add @jacob-hooks/use-axios`

- npm

`$ npm i @jacob-hooks/use-axios `

# Usage

```js
import useAxios from "@jacob-hooks/use-axios";

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <>
      <div className="App">
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
        <button onClick={refetch}>Refetch</button>
      </div>
    </>
  );
};

export default App;
```
