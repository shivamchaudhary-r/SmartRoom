import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import StudentDetail from './StudentDetail';
import ZoomMeet2 from '../../components/zoom/ZoomMeet2';
import FullCalendar from '../../components/calendar/FullCalendar';
import StudentSideBar from './StudentSideBar';
import StudentContent from './StudentContent';
import { StudentCredProvider } from '../../context/StudentCredentials';
import StudentCredContext from '../../context/StudentCredentials';
import React from 'react';

export default function StudentDashboard() {
  const { id } = useParams();
  const [localState, setLocalState] = useState(false);
  const { userData, token, setUserData } = useContext(StudentCredContext);
  console.log(userData, token, id);

  useEffect(() => {
    const fetchData = async () => {
      let btoken = await JSON.parse(localStorage.getItem('studenttoken'));
      console.log(btoken);
      const dataFrom = await axios.get(`http://localhost:8080/student/get/details/${id}`, {
        headers: { Authorization: `Bearer ${btoken.token}` },
      });
      console.log(dataFrom.data);
      setUserData(dataFrom.data);
      setLocalState(true);
    };
    fetchData();
  }, [localState]);

  return (
    <div className="flex">
      {localState && <StudentSideBar />}
      <Routes>
        <Route index element={localState && <StudentContent />} />
        <Route path="/zoommeeting" element={<ZoomMeet2 />} />
        <Route path="/calendar" element={<FullCalendar />} />
      </Routes>
    </div>
  );
}



