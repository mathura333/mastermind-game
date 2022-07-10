import BoardRowColors from "./BoardRowColors";
import Pegs from "../Pegs/Pegs";
import Submit from "./Submit";
import { useEffect, useState } from "react";
import { boardColorsBg } from "../../../../constants/boardColors";
import PegVariants from "../../../../types/PegVariants";

interface IBoardRow {
  currentRowIndex: number;
  rowIndex: number;
  selectedColorIndex: number;
  colorCode: Array<string>;
  setCurrentRowIndex: (cb: any) => void;
  setShowGameOverModal: (cb: any) => void;
  setShowGameWonModal: (cb: any) => void;
}

const BoardRow: React.FC<IBoardRow> = ({
  currentRowIndex,
  rowIndex,
  selectedColorIndex,
  colorCode,
  setCurrentRowIndex,
  setShowGameOverModal,
  setShowGameWonModal,
}) => {
  const [showDone, setShowDone] = useState(false);
  const [rowColors, setRowColors] = useState<Array<string>>(
    Array(4).fill(null)
  );
  const [pegsVariants, setPegsVariants] = useState<Array<PegVariants>>(
    Array(4).fill("notAttempted")
  );

  useEffect(() => {
    if (rowColors.every((color) => color !== null)) {
      setShowDone(true);
    }
  }, [rowColors]);

  const changeRowColor = (colorIndex: number) => {
    if (currentRowIndex === rowIndex) {
      setRowColors(([...prev]) => {
        prev[colorIndex] = boardColorsBg[selectedColorIndex];
        return prev;
      });
    }
  };

  const onDone = () => {
    // Obj to store number of each type of pegs
    const newPegVariants = {
      correct: 0,
      incorrectPosition: 0,
      incorrect: 0,
    };
    const colorCodeIncorrectPosCheck: Array<string> = [];
    const rowColorIncorrectPosCheck: Array<string> = [];

    // Firstly update number of correct pegs and update new arrays for next check
    rowColors.forEach((rowColor, index) => {
      if (rowColor === colorCode[index]) {
        newPegVariants.correct += 1;
      } else {
        colorCodeIncorrectPosCheck.push(colorCode[index]);
        rowColorIncorrectPosCheck.push(rowColor);
      }
    });

    // check for incorrect positions. If found than update the colorCodeIncorrectPosCheck and update the incorrectPosition count
    rowColorIncorrectPosCheck.forEach((rowColor) => {
      if (colorCodeIncorrectPosCheck.includes(rowColor)) {
        newPegVariants.incorrectPosition += 1;
        colorCodeIncorrectPosCheck.splice(
          colorCodeIncorrectPosCheck.indexOf(rowColor),
          1
        );
      } else {
        newPegVariants.incorrect += 1;
      }
    });

    // Iterate over newPegVariants obj to store the pegs
    setPegsVariants(
      Object.entries(newPegVariants).reduce((prev, [key, value]) => {
        const variants = [...prev];
        for (let i = 0; i < value; i += 1) {
          // @ts-ignore
          variants.push(key);
        }
        return variants;
      }, [])
    );

    setShowDone(false);

    // case when all pegs are correct
    if (newPegVariants.correct === 4) {
      setShowGameWonModal(true);
    }

    // go to next row
    setCurrentRowIndex((prev: number) => prev + 1);

    // game over if all rows are completed
    if (rowIndex === 9) {
      setShowGameOverModal(true);
    }
  };

  return (
    <div
      className={`flex gap-4 items-center border-2 rounded-sm p-3 ${
        currentRowIndex === rowIndex ? "border-gray-300" : "border-transparent"
      } ${rowIndex < currentRowIndex ? "opacity-70" : "opacity-100"}`}
    >
      <BoardRowColors rowColors={rowColors} onClick={changeRowColor} />
      <Submit isVisible={showDone} onClick={onDone} />
      <Pegs pegsVariants={pegsVariants} />
    </div>
  );
};

export default BoardRow;
