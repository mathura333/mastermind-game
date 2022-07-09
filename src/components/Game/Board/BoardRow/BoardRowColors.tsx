import SoloColor from "../../../common/SoloColor";

const BoardRowColors = () => {
  return (
    <div className="flex gap-1">
      {Array(4)
        .fill(1)
        .map(() => (
          <SoloColor isSelected={false} onClick={() => {}} />
        ))}
    </div>
  );
};

export default BoardRowColors;
