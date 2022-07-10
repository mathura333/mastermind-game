import Game from "./components/Game/Game";
import Header from "./components/Header";
import useColorCodeInit from "./hooks/useColorCodeInit";

function App() {
  const colorCode = useColorCodeInit();

  return (
    <div className="p-5 flex flex-col items-center gap-7">
      <Header />
      <Game colorCode={colorCode} />
    </div>
  );
}

export default App;
