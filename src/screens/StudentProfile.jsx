import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {profileUpdate} from "../actions/studentActions.js"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import StudentNavs from "../components/StudentNavs.jsx";
function StudentProfile({history}){

    const studentLogin = useSelector(state => state.studentLogin)
    const {loading,err,studentInfo}  = studentLogin
    const[studentData , setStudentData] = useState(studentInfo);
    const [editMode, setEditMode] = useState(false);
    
    useEffect (()=>{
        console.log(studentInfo)
        if(!studentInfo){
            history.push("/student/login")
        }
    },[history,studentInfo])

    function changeDetails(event){
        const {name,value} = event.target;
        if(editMode){
            setStudentData((prev)=>(
                {...prev,
                [name] : value
                }
            ))
            
            
        }
    }

    function updateProfile(){
        // update profile left
        const updatedInfo = {...studentInfo , ...studentData};
        // console.log(updatedInfo)
        profileUpdate(updatedInfo).then(()=>{
            
            alert("Profile Update Success"); 
            setEditMode(false);
            window.location.reload(false)
            
        }).catch((err)=>{
            alert("Please use another email id. This email id is already registered")
            setStudentData(studentInfo)
        })
        // localStorage.setItem('studentInfo', JSON.stringify(updatedInfo))
        // alert("update profile left")
    }

    return (
        // <BrowserRouter>
        <div>
            <div>
            <StudentNavs/>
            </div>
        <div className="d-flex flex-column justify-content-center  align-items-center m-3">
            
            <h1>Your Profile</h1>
            <div className="card mt-4 justify-content-center d-flex align-items-center" style={{width : "500px" , height : "400px", backgroundColor : "#e0dede"}}> 

            <div> Your Name : <input type="text" name = "stud_name" onChange={changeDetails}  placeholder="Enter Your Full Name" value = {studentData.stud_name} /></div>
            <div> Your Email ID : <input type="email" name = "stud_email" onChange={changeDetails}  placeholder="Enter your email address" value = {studentData.stud_email} /></div>
            <div> Your Mobile No : <input type="number"name = "stud_mobile" onChange={changeDetails}  placeholder="Enter your Mobile No." value = {studentData.stud_mobile} /></div>
            
            
            {editMode ?
            <button onClick={updateProfile}  className="btn  " role="img" style={{backgroundColor : "#5A4BDA", color : "white" ,  fontWeight : "500" }}>Save Profile</button>:
            <button onClick={()=>setEditMode(true)} className="btn  " role="img" style={{backgroundColor : "#5A4BDA", color : "white" ,  fontWeight : "500" }}>Edit Profile</button>
             }
            </div>
            

        </div>
        </div>
        // </BrowserRouter>
    )
}

export default StudentProfile;