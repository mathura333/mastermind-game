import PegVariants from "../../../../types/PegVariants";
interface ISoloPeg {
  variant: PegVariants;
  className?: string;
}

const getVariantClasses = (variant: PegVariants) => {
  if (variant === "notAttempted" || variant === "incorrectPosition") {
    return "bg-white";
  }
  if (variant === "correct") {
    return "bg-slate-800";
  }
  if (variant === "incorrect") {
    return "bg-red-500 border-red-500";
  }
  return "";
};

const SoloPeg: React.FC<ISoloPeg> = ({ variant, className }) => {
  return (
    <div
      className={`border-2 border-slate-800 w-3 h-3 rounded-full ${getVariantClasses(
        variant
      )} ${className ?? ""}`}
    />
  );
};

export default SoloPeg;
