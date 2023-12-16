import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OneSignal from "react-onesignal";

function App() {
  useEffect(() => {
    (async () => {
      OneSignal.init({
        // TODO: 事前にメモしておいた appID に置き換えてください。OneSignal のダッシュボードでヘッダーの Settins → Keys & IDs でも確認できます。
        appId: "10ed4e40-b9d0-4edd-9fbc-ebdb27f2ae19",
      });
    })();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
