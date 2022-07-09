import SoloPeg from "./SoloPeg";

const Pegs = () => {
  return (
    <div className="flex flex-wrap gap-2 w-8">
      {Array(4)
        .fill(1)
        .map(() => (
          <SoloPeg />
        ))}
    </div>
  );
};

export default Pegs;
