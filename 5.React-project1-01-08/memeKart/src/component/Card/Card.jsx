import "./Card.css";

// props is an object that collect all the parameter which we pass to component

// props {imgLink: 'https://i.redd.it/8cccpzsq2cfd1.gif', name: 'Rare-Error-963', upCount: 114}

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <img className="card-img" src={props.imgLink} />
      <div className="card-bottom">
        <p className="card-Aname">{props.name} </p>
        <div className="card-up">{props.upCount}</div>
      </div>
    </div>
  );
};

export default Card;
