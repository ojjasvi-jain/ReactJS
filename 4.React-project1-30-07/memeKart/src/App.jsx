import "./App.css";
import { useState } from "react";

import Card from "./component/Card/Card";
import NavBar from "./component/NavBar/NavBar";
import Form from "./component/Form/Form.jsx";

import memeData from "../data.js";

const App = () => {
  // hooks - function providered by react - special

  // useState - always that takes intial argument and  return two thing
  //  1. variable
  //  2. function which update that varible

  const [memeDataCollection, setMemeDataCollection] = useState(memeData.memes);

  const UpVoteHandler = () => {
    const filteredMeme = memeDataCollection.filter((data) => data.ups >= 500);

    setMemeDataCollection(filteredMeme);
  };

  const authorNameFilter = (e, inputValue) => {
    e.preventDefault();
    const filterMemes = memeDataCollection.filter((data) =>
      data.author.toLowerCase().includes(inputValue)
    );

    setMemeDataCollection(filterMemes);
  };

  return (
    <>
      <NavBar />
      <Form UpVoteHandler={UpVoteHandler} authorNameFilter={authorNameFilter} />
      <div className="wrapper">
        {memeDataCollection.map((data, i) => (
          <Card
            key={i}
            imgLink={data.url}
            name={data.author}
            upCount={data.ups}
          />
        ))}
      </div>
    </>
  );
};

export default App;
