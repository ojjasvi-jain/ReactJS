import "./App.css";

import Card from "./component/Card/Card";

const App = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="logo"></div>
        <div className="links">
          <ul className="links-conatiner">
            <li>Home </li>
            <li>About Us</li>
            <li>Contact US</li>
            <li className="active">Cart</li>
          </ul>
        </div>
      </nav>
      <header>
        <h1 className="header"> 😁Let's Enjoy the moment </h1>
        <p className="para">This is information we get from </p>
      </header>
      <div>
        <button>filter top meme </button>
      </div>
      <div className="wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
