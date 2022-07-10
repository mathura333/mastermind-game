import { useEffect, useState } from "react";
import { boardColorsBg } from "../constants/boardColors";

const pickOneRandomColor = () => {
  return boardColorsBg[Math.floor(Math.random() * boardColorsBg.length)];
};

const useColorCodeInit = () => {
  const [colorCode, setColorCode] = useState<Array<string>>([]);

  const initColorCode = () => {
    setColorCode(
      Array(4)
        .fill(1)
        .map(() => pickOneRandomColor())
    );
  };

  useEffect(() => {
    if (colorCode.length === 0) {
      initColorCode();
    }
  }, [colorCode.length]);

  return colorCode;
};

export default useColorCodeInit;
