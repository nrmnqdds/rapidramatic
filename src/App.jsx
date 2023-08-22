import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AppTitle from "./components/AppTitle";
import { BsGithub } from "react-icons/bs";
import SelectMonth from "./components/SelectMonth";
import IssueChart from "./components/IssueChart";
import UserData from "./components/Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <main className="w-screen h-screen bg-slate-100 dark:bg-zinc-900 flex flex-col p-5 items-center">
      <ThemeSwitcher />
      <AppTitle />

      <SelectMonth />
      <div style={{ width: 700 }}>
        <IssueChart chartData={userData} />
      </div>

      <BsGithub
        size={30}
        className="absolute bottom-5 hover:cursor-pointer hover:scale-105"
        onClick={() => window.open("https://github.com/qryskalyst20", "_blank")}
      />
    </main>
  );
}

export default App;
