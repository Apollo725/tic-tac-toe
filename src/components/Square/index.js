// Assets
import "./index.css";

const Square = ({ index, mark, onClick }) => {
  return (
    <div className="square-container">
      <button className="square" onClick={() => onClick(index)}>
        {mark}
      </button>
    </div>
  );
};

export default Square;
