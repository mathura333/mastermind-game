import Game from "./components/Game/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="mt-2 flex flex-col items-center gap-7">
      <Header />
      <Game />
    </div>
  );
}

export default App;
