import "./App.css";
import { useEffect, useState } from "react";

import Card from "./component/Card/Card";
import NavBar from "./component/NavBar/NavBar";
import Form from "./component/Form/Form.jsx";
import Shimmer from "./component/Shimmer/Shimmer.jsx";

import memeData from "../data.js";

const API = "https://meme-api.com/gimme";

const App = () => {
  // hooks - function providered by react - special

  // useState - always that takes intial argument and  return two thing
  //  1. variable
  //  2. function which update that varible

  const [memeDataCollection, setMemeDataCollection] = useState([]);
  const [loaded, SetLoaded] = useState(false);
  const [number, setNumber] = useState(5);

  const festchData = async (num) => {
    let jsonData = await fetch(`${API}/${num}`);
    let data = await jsonData.json();

    setMemeDataCollection(data.memes);
    SetLoaded("true");
  };

  const UpVoteHandler = () => {
    const filteredMeme = memeDataCollection.filter((data) => data.ups >= 500);

    setMemeDataCollection(filteredMeme);
  };

  const authorNameFilter = (e, inputValue) => {
    e.preventDefault();
    // const filterMemes = memeDataCollection.filter((data) =>
    //   data.author.toLowerCase().includes(inputValue)
    // );

    setNumber(inputValue);

    // setMemeDataCollection(filterMemes);
  };

  useEffect(() => {
    festchData(number);
    console.log("from useEffect function");
  }, [number]);

  return (
    <>
      {loaded ? (
        <>
          <NavBar />
          <Form
            UpVoteHandler={UpVoteHandler}
            authorNameFilter={authorNameFilter}
          />
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
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default App;
