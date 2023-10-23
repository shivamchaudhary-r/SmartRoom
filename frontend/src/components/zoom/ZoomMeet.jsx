import React from 'react';
import './ZoomMeet.css';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';


let token;
let tokenfromstorage = localStorage.length !== 0 ? JSON.parse(localStorage.getItem('teachertoken')) : null;
console.log(tokenfromstorage)
if (tokenfromstorage) {
  token = tokenfromstorage.token;
}
console.log(token)


function ZoomMeet() {
  //   const passkey="W9z6hK"
  //   useEffect(()=>{
  //     const handleSendMail=async(email)=>{
  //       let Databody=`Join Your Online Class Via Zoom Meeting with Password : ${passkey}`;
  //       axios.post(`http://localhost:8080/teacher/send/email/${email}`,Databody,{headers: {
  //       "Authorization": `Bearer ${token}`,
  //       "Content-Type": "text/plain"}}).then((res)=>{
  //           console.log(res)
  //           if (res.status===200){
  //           return true
  //           }
  //           return false
  //         })
  //   }
  //     const sendMail=async ()=>{
  //         let response=await axios.get('http://localhost:8080/auth/student/fetch/all')
  //         const sortedData=await response.data 
  //         sortedData.forEach(async (studData)=>{
  //           if ('email' in studData && studData.email){
  //             let isSend= await handleSendMail(studData.email)
  //           }
  //         })   
  //     } 
  // sendMail() 
  // },[])


  return (
    <div className='flex w-full '>
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
      </div>

      <div className="grid w-full" >
        <div>
          <main class='meetContainer'>
            <iframe class='responsive-iframe' title='Zoom Meet' src="https://zoom.us/wc/2308342925/join?from=join&_x_zm_rtaid=0BdY0YceQQuSHhsogGqVdw.1685861925349.d3f4c5e7947eb93dd4aa50554fbcc071&_x_zm_rhtaid=756" allow="camera; microphone"></iframe>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ZoomMeet;

