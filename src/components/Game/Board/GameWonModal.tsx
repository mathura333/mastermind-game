import Modal from "../../lib/Modal";

interface IGameOverModal {
  showGameWonModal: boolean;
  playAgain: React.MouseEventHandler<HTMLButtonElement>;
}

const GameWonModal: React.FC<IGameOverModal> = ({
  showGameWonModal,
  playAgain,
}) => {
  return (
    <Modal className="bg-green-500" open={showGameWonModal} onClose={() => {}}>
      <div className="flex flex-col gap-5 items-center justify-center w-60 h-32">
        <p className="bg-green-500 text-white font-medium text-3xl">
          Congratulations!
        </p>
        <button
          className="bg-white p-2 rounded-xl border-2 border-slate-800"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    </Modal>
  );
};

export default GameWonModal;
