import "./detail.scss";
import React, { useContext } from 'react';
import TeacherContext from '../home/TeacherContext';

function Detail() {
  const { predStudent } = useContext(TeacherContext);
  console.log(predStudent);

  return (
    <div className="flex p-4 flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Student Details</div>
      </div>
      <div className="mt-3">
        <div className="ml-3">
          <div className="detail-row">
            <span>Standard:</span>
            <span className="text-white">{predStudent.studentDetails.standard}</span>
          </div>
          <div className="detail-row">
            <span>Student ID:</span>
            <span className="text-white">{predStudent.studentId}</span>
          </div>
          <div className="detail-row">
            <span>Batch:</span>
            <span className="text-white">{predStudent.studentDetails.batch}</span>
          </div>
          <div className="detail-row">
            <span>Student Name:</span>
            <span className="text-white">{predStudent.studentName}</span>
          </div>
          <div className="detail-row">
            <span>Date of Birth:</span>
            <span className="text-white">{predStudent.studentDetails.dob}</span>
          </div>
          <div className="detail-row">
            <span>Email:</span>
            <span className="text-white">{predStudent.email}</span>
          </div>
          <div className="detail-row">
            <span>Phone:</span>
            <span className="text-white">{predStudent.studentDetails.phone}</span>
          </div>
          <div className="detail-row">
            <span>Address:</span>
            <span className="text-white">{predStudent.studentDetails.fullAddress}</span>
          </div>
          <div className="ml-3 detail-row">
            <span></span>
          </div>
          <div className="flex-grow" />
        </div>
        <div className="flex justify-center mt-3">
          <div className="check-all-btn">Check All</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;


