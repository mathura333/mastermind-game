interface ISoloColor {
  color?: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const SoloColor: React.FC<ISoloColor> = ({ color, isSelected, onClick }) => {
  return (
    <div
      className={`border-2 w-8 h-8 rounded-full cursor-pointer ${
        isSelected ? "border-gray-700" : "border-gray-200"
      } ${color ?? ""}`}
      onClick={onClick}
    />
  );
};

export default SoloColor;
