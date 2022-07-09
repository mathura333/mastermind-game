import { useState } from "react";
import Board from "./Board/Board";
import Colors from "./Colors/Colors";

const Game = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <div className="flex gap-20">
      <Board />
      <Colors
        selectedColorIndex={selectedColorIndex}
        setSelectedColorIndex={setSelectedColorIndex}
      />
    </div>
  );
};

export default Game;
