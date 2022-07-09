import { useState } from "react";
import BoardRow from "./BoardRow/BoardRow";

const Board = () => {
  const [currentRowIndex, setCurrentRowIndex] = useState(0);

  return (
    <div className="flex flex-col gap-0">
      {Array(10)
        .fill(1)
        .map((value, index) => (
          <BoardRow isCurrentRow={currentRowIndex === index} />
        ))}
    </div>
  );
};

export default Board;
