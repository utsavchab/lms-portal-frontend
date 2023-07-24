import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../App.css';
import StudentNavs from "../components/StudentNavs";
import { listCourses } from '../actions/courseActions';
import CourseBox from '../components/CourseBox';

function StudentEnrolledCourses({history}){
    const studentLogin = useSelector(state => state.studentLogin)
    const {studentInfo} = studentLogin
    
    useEffect(()=>{
        if(!studentInfo){
            history.push("/student/login")
        }
    })
    
    const currentStyle = {
        backgroundColor : "white",
        color : "black",
        fontWeight : "bold"
    }

    const [yourCourseStyle , setYourCourseStyle] = useState(currentStyle)
    const [exploreCourseStyle, setExploreCourseStyle] = useState({})
    const [flag, setFlag] = useState(true)
    
    function yourCourseClick() {
        setYourCourseStyle(currentStyle)
        setExploreCourseStyle({})
        setFlag(true);
    }

    function exploreCourseClick() {
        setYourCourseStyle({})
        setExploreCourseStyle(currentStyle)
        setFlag(false);
    }
    
    function exploreCourseComponent(){
        // TODO:: Complete the exlpore course compoent and your courses.
        return <div className="explore-courses">
                    <h1>Artificial Intelligence Courses</h1>
                <CourseBox courseName = "Master Generative AI 2023" courseOutline = "Generative AI" />
            </div>
    }
    
    return (
        <div className="enrolled">
            <StudentNavs/>
            <div className="enrolled-sidebar">   
            <div className="enrolled-sidebar-li">
                <h1 className="enrolled-your-course" onClick ={yourCourseClick} style={yourCourseStyle}> Your Courses</h1>
                <h1 className="enrolled-your-course" onClick ={exploreCourseClick} style = {exploreCourseStyle}> Explore Courses</h1>
            </div>
               
            </div>
            <div> 
                {flag?
                <h1>Enrolled courses</h1>:
                exploreCourseComponent()
                }
            </div>


        </div>
    )
}

export default StudentEnrolledCourses