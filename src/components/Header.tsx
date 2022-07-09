import boardColors from "../constants/boardColors";

const Header = () => {
  return (
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
  );
};

export default Header;
