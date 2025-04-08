import TitleMessage from "./components/title.jsx";
import StartButton from "./components/startButton.jsx";
import bg from "./assets/bg.png";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen gap-20">
        <TitleMessage />
        <StartButton />
      </div>
    </div>
  );
}

export default Home;
