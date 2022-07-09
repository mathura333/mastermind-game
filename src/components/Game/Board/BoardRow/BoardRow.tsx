import BoardRowColors from "./BoardRowColors";
import Pegs from "../Pegs/Pegs";
import Submit from "./Submit";
import { useState } from "react";

interface IBoardRow {
  isCurrentRow: boolean;
}

const BoardRow: React.FC<IBoardRow> = ({ isCurrentRow }) => {
  const [showDone, setShowDone] = useState(false);

  return (
    <div
      className={`flex gap-4 items-center border-2 rounded-sm p-3 ${
        isCurrentRow ? "border-gray-300" : "border-transparent"
      }`}
    >
      <BoardRowColors />
      <Submit isVisible={showDone} onClick={() => {}} />
      <Pegs />
    </div>
  );
};

export default BoardRow;
