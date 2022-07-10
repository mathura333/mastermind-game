import SoloPeg from "./Game/Board/Pegs/SoloPeg";
import Modal from "./lib/Modal";

interface IHintModal {
  isRulesModalOpen: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const RulesModal: React.FC<IHintModal> = ({ isRulesModalOpen, onClose }) => {
  return (
    <Modal title="Rules" onClose={onClose} open={isRulesModalOpen}>
      <div>
        Try to guess the pattern, in both order and color, within ten turns.
        After submitting a row, a small black peg{" "}
        <SoloPeg variant="correct" className="inline-block" /> is placed for
        each code peg from the guess which is correct in both color and
        position. A white peg{" "}
        <SoloPeg variant="incorrectPosition" className="inline-block" />{" "}
        indicates the existence of a correct color code peg placed in the wrong
        position. A red peg{" "}
        <SoloPeg variant="incorrect" className="inline-block" /> indicates wrong
        color and position. More info on{" "}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
          rel="noreferrer"
          className="text-cyan-600 underline"
        >
          Wikipedia
        </a>
        .
      </div>
    </Modal>
  );
};

export default RulesModal;
