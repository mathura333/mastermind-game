import { useState } from "react";
import Board from "./Board/Board";
import Colors from "./Colors/Colors";

interface IGame {
  colorCode: Array<string>;
}

const Game: React.FC<IGame> = ({ colorCode }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <div className="flex gap-12">
      <Board selectedColorIndex={selectedColorIndex} colorCode={colorCode} />
      <Colors
        selectedColorIndex={selectedColorIndex}
        setSelectedColorIndex={setSelectedColorIndex}
      />
    </div>
  );
};

export default Game;
