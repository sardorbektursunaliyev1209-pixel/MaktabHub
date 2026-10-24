import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Kod from "./Login/Kod";

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kod" element={<Kod />} />

      </Routes>
    </>
  );
}

export default Home;
