import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Kod from "./Login/Kod";
import Rol from "./Login/Rol";
import ParentHome from "./Parent/ParentHome";
import TeacherHome from "./teacher/TeacherHome";
import Grades from "./Parent/grades";
import Schedule from "./Parent/schedule";
import Messages from "./Parent/Messages";
import Profile from "./Parent/Profile";
import SubjectDetail from "./Parent/SubjectDetail";
import Attendance from "./Parent/Attendance";

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kod" element={<Kod />} />
        <Route path="/Rol" element={<Rol />} />
        <Route path="/Parent" element={<ParentHome />} />
        <Route path="/Teacher" element={<TeacherHome />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/grades/:subject" element={<SubjectDetail />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </>
  );
}

export default Home;
