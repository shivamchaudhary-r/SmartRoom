import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { useState, useEffect, useContext } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import TeacherContext from "../home/TeacherContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Content from './Content';
import Typography from '@mui/material/Typography';

let tokenfromstorage = localStorage.length !== 0 ? JSON.parse(localStorage.getItem('teachertoken')) : null;
let token
if (tokenfromstorage) {
    token = tokenfromstorage.token;
}
console.log(token)
export default function Report() {
    console.log("report")

    const { predStudent, setPredStudent } = useContext(TeacherContext);
    const { predEnglish, setPredEnglish } = useContext(TeacherContext);
    const { predMath, setPredMath } = useContext(TeacherContext);
    const { predHindi, setPredHindi } = useContext(TeacherContext);
    const { predScience, setPredScience } = useContext(TeacherContext);
    const { predSst, setPredSst } = useContext(TeacherContext);
    const { predOverall, setPredOverall } = useContext(TeacherContext);
    const { studentSubjectData, setStudentSubjectData, setSendMail, setSubtoSend } = useContext(TeacherContext);


    useEffect(() => {
        const FetchData = async () => {
            let english, hindi, math, science, sst, overall;

            if (predStudent.studentDetails.predictedResult?.english === undefined) {
                console.log('if')
                let response = await axios.get(`http://localhost:8080/teacher/predict/${predStudent.studentId}/english`, { headers: { "Authorization": `Bearer ${token}` } });
                english = response.data["Predicted Score"];
            }
            else {
                console.log('else')
                //english.data={}
                english = JSON.parse(predStudent.studentDetails.predictedResult.english)['Predicted Score'];
                console.log(english)
            }
            if (!predStudent.studentDetails.predictedResult?.hindi) {
                console.log('if')
                let response = await axios.get(`http://localhost:8080/teacher/predict/${predStudent.studentId}/hindi`, { headers: { "Authorization": `Bearer ${token}` } })
                hindi = response.data["Predicted Score"]
            }
            else {
                // hindi.data={}
                hindi = JSON.parse(predStudent.studentDetails.predictedResult.hindi)['Predicted Score'];
            }
            if (!predStudent.studentDetails.predictedResult?.math) {
                console.log('if')
                let response = await axios.get(`http://localhost:8080/teacher/predict/${predStudent.studentId}/math`, { headers: { "Authorization": `Bearer ${token}` } })
                math = response.data['Predicted Score']
            }
            else {
                // math.data={}
                math = JSON.parse(predStudent.studentDetails.predictedResult.math)['Predicted Score'];
            }
            if (!predStudent.studentDetails.predictedResult?.science) {
                console.log('if')
                let response = await axios.get(`http://localhost:8080/teacher/predict/${predStudent.studentId}/science`, { headers: { "Authorization": `Bearer ${token}` } })
                science = response.data['Predicted Score']
            }
            else {
                //science.data={}
                science = JSON.parse(predStudent.studentDetails.predictedResult.science)['Predicted Score'];
            }
            if (!predStudent.studentDetails.predictedResult?.sst) {
                console.log('if')
                let response = await axios.get(`http://localhost:8080/teacher/predict/${predStudent.studentId}/sst`, { headers: { "Authorization": `Bearer ${token}` } })
                sst = response.data['Predicted Score']
            }
            else {
                //sst.data={}
                sst = JSON.parse(predStudent.studentDetails.predictedResult.sst)['Predicted Score'];
            }
            if (!predStudent.studentDetails.predictedResult?.overall) {
                console.log('if');
                let response = await axios.get(`http://localhost:8080/teacher/predict/${predStudent.studentId}/overall`, { headers: { "Authorization": `Bearer ${token}` } })
                overall = response.data['Predicted Score']
            }
            else {

                overall = JSON.parse(predStudent.studentDetails.predictedResult.overall)['Predicted Score'];
            }
            console.log(english, hindi, math, sst, science)
            setPredEnglish(english)
            setPredHindi(hindi)
            setPredMath(math)
            setPredSst(sst)
            setPredScience(science)
            setPredOverall(overall)
            function retobj(id, name, score, rise, progress) {
                return { id, name, score, rise, progress }
            }
            let engrise = english / 5 > predStudent.studentDetails.studentMarks.english.reduce((acc, curr) => acc + curr, 0) / 2
            let hinrise = hindi / 5 > predStudent.studentDetails.studentMarks.hindi.reduce((acc, curr) => acc + curr, 0) / 2
            let scirise = science / 5 > predStudent.studentDetails.studentMarks.science.reduce((acc, curr) => acc + curr, 0) / 2
            let matrise = math / 5 > predStudent.studentDetails.studentMarks.math.reduce((acc, curr) => acc + curr, 0) / 2
            let sstrise = sst / 5 > predStudent.studentDetails.studentMarks.sst.reduce((acc, curr) => acc + curr, 0) / 2

            let obj = predStudent.studentDetails.studentMarks
            let sum = 0
            for (let key in obj) {
                sum = (obj[key][0] + obj[key][1]) / 2
            }
            let ovlrise = overall / 4 > sum;
            setStudentSubjectData([retobj('eng', 'English', english, engrise, english / 20), retobj('hin', 'Hindi', hindi, hinrise, hindi / 20), retobj('mat', 'Math', math, matrise, math / 20), retobj('sci', 'Science', science, scirise, science / 20), retobj('sst', 'Social Science', sst, sstrise, sst / 20), retobj('overall', 'Overall', overall, ovlrise, overall / 20)]);
            let predarr = [english, hindi, math, science, sst, overall]
            console.log(predarr)
            let arr = predarr.map((ele, index) => {
                console.log(ele)
                if (ele < 50) {
                    return index;
                }
            })
            console.log(arr)
            setSubtoSend(arr);
            setSendMail(predarr.some(ele => ele < 50));
        }

        FetchData();
    }, [])

    return (
        <div className="flex">
            <Content
                subData={studentSubjectData}
            />
        </div>
    );
}
