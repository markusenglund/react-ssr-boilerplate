import React from "react";
import { Helmet } from "react-helmet";
import "./App.scss";

const App = () => {
  const asdf = "asdf";
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>{asdf}</h1>
    </>
  );
};

export default App;
