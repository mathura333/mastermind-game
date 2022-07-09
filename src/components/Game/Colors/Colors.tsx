import { boardColorsBg } from "../../../constants/boardColors";
import SoloColor from "../../common/SoloColor";

interface IColors {
  selectedColorIndex: number;
  setSelectedColorIndex: (index: number) => void;
}

const Colors: React.FC<IColors> = ({
  selectedColorIndex,
  setSelectedColorIndex,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {boardColorsBg.map((color, index) => (
        <SoloColor
          key={color}
          color={color}
          isSelected={selectedColorIndex === index}
          onClick={() => setSelectedColorIndex(index)}
        />
      ))}
    </div>
  );
};

export default Colors;
