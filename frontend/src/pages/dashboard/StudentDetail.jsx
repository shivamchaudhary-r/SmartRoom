import React, { useContext } from 'react';
import StudentCredContext from '../../context/StudentCredentials';
import { useParams } from 'react-router-dom';

function StudentDetail() {
  const { userData } = useContext(StudentCredContext);
  const { id } = useParams();

  return (
    <div className="rounded-lg p-4">
      <h2 className="text-white font-bold text-xl mb-4">Student Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Student ID : </span>
          <span className="text-gray-500">{id}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Student Name : </span>
          <span className="text-gray-500">{userData.studentName}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Batch : </span>
          <span className="text-gray-500">{userData.studentDetails.batch}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Standard : </span>
          <span className="text-gray-500">{userData.studentDetails.standard}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Date of Birth : </span>
          <span className="text-gray-500">{userData.studentDetails.dob}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Email : </span>
          <span className="text-gray-500">{userData.email}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Address : </span>
          <span className="text-gray-500">{userData.studentDetails.fullAddress}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Mother Name : </span>
          <span className="text-gray-500">{userData.studentDetails.motherName}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Father Name : </span>
          <span className="text-gray-500">{userData.studentDetails.fatherName}</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <span className="font-bold">Phone : </span>
          <span className="text-gray-500">{userData.studentDetails.phone}</span>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;



