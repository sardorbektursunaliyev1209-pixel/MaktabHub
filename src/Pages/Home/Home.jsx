import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Kod from "./Login/Kod";
import Rol from "./Login/Rol";
import ParentHome from "./Parent/ParentHome";
import Messages from "./Parent/Messages";
import Profile from "./Parent/Profile";
import SubjectDetail from "./Parent/SubjectDetail";
import Attendance from "./Parent/Attendance";
import Grades from "./Parent/grades";
import Schedule from "./Parent/schedule";

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kod" element={<Kod />} />
        <Route path="/rol" element={<Rol />} />
        <Route path="/parent" element={<ParentHome />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/grades/:subject" element={<SubjectDetail />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </>
  );
}

export default Home;