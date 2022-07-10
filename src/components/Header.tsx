import { useState } from "react";
import boardColors from "../constants/boardColors";
import RulesModal from "./RulesModal";

const Header = () => {
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      <RulesModal
        isRulesModalOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
      />
      <h1 className="flex justify-center text-4xl tracking-widest text-gray-700">
        <span className={boardColors[0]}>M</span>
        <span className={boardColors[1]}>A</span>
        <span className={boardColors[2]}>S</span>
        <span className={boardColors[3]}>T</span>
        <span className={boardColors[4]}>E</span>
        <span className={boardColors[5]}>R</span>
        <span>M</span>
        <span>I</span>
        <span>N</span>
        <span>D</span>
      </h1>
      <span
        onClick={() => setIsRulesModalOpen(true)}
        className="cursor-pointer"
      >
        Rules
      </span>
    </div>
  );
};

export default Header;
