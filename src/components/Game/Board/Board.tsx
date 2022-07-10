import { useState } from "react";
import BoardRow from "./BoardRow/BoardRow";
import GameOverModal from "./GameOverModal";
import GameWonModal from "./GameWonModal";

interface IBoard {
  selectedColorIndex: number;
  colorCode: Array<string>;
}

const Board: React.FC<IBoard> = ({ selectedColorIndex, colorCode }) => {
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [showGameWonModal, setShowGameWonModal] = useState(false);

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <>
      <GameOverModal
        showGameOverModal={showGameOverModal}
        playAgain={playAgain}
      />
      <GameWonModal showGameWonModal={showGameWonModal} playAgain={playAgain} />
      <div className="flex flex-col gap-0">
        {Array(10)
          .fill(1)
          .map((value, index) => (
            <BoardRow
              currentRowIndex={currentRowIndex}
              selectedColorIndex={selectedColorIndex}
              rowIndex={index}
              key={index}
              colorCode={colorCode}
              setCurrentRowIndex={setCurrentRowIndex}
              setShowGameOverModal={setShowGameOverModal}
              setShowGameWonModal={setShowGameWonModal}
            />
          ))}
      </div>
    </>
  );
};

export default Board;
