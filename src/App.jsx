import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigators from "./components/Navigators";

function App() {
  return (
    <>
      <Header />
      <Navigators />
      <Outlet />
    </>
  );
}

export default App;
