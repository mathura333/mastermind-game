import SoloColor from '../../../common/SoloColor';

interface IBoardRowColors {
  rowColors: Array<string>;
  onClick: (index: number) => void;
}

const BoardRowColors: React.FC<IBoardRowColors> = ({ rowColors, onClick }) => {
  return (
    <div className="flex gap-1">
      {rowColors.map((color, index) => (
        <SoloColor
          isSelected={false}
          onClick={() => onClick(index)}
          color={color}
          key={index}
        />
      ))}
    </div>
  );
};

export default BoardRowColors;
