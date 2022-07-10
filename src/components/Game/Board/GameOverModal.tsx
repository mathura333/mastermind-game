import Modal from "../../lib/Modal";

interface IGameOverModal {
  showGameOverModal: boolean;
  playAgain: React.MouseEventHandler<HTMLButtonElement>;
}

const GameOverModal: React.FC<IGameOverModal> = ({
  showGameOverModal,
  playAgain,
}) => {
  return (
    <Modal className="bg-red-500" open={showGameOverModal} onClose={() => {}}>
      <div className="flex flex-col gap-5 items-center justify-center w-60 h-32">
        <p className="bg-red-500 text-white font-medium text-3xl">Game Over!</p>
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

export default GameOverModal;
