import PegVariants from '../../../../types/PegVariants';
import SoloPeg from './SoloPeg';

interface IPegs {
  pegsVariants: Array<PegVariants>;
}

const Pegs: React.FC<IPegs> = ({ pegsVariants }) => {
  return (
    <div className="flex flex-wrap gap-2 w-8">
      {pegsVariants.map((pegVariant, index) => (
        <SoloPeg variant={pegVariant} key={index} />
      ))}
    </div>
  );
};

export default Pegs;
