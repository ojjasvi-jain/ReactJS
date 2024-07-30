import { useState } from "react";

import "./Form.css";

const Form = ({ UpVoteHandler, authorNameFilter }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-cont">
      <button className="form-btn" onClick={() => UpVoteHandler()}>
        Most Famous Meme
      </button>

      <form>
        <input
          className="form-input"
          type="text"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <button
          className="form-btn"
          onClick={(e) => authorNameFilter(e, inputValue)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
