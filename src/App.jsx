import React, { useEffect } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Courses from "./screens/Courses";
import Tests from "./screens/Tests";
import Contact from "./screens/Contact";
import Notices from "./screens/Notices";
import TeacherLogin from "./screens/TeacherLogin";
import TeacherRegister from "./screens/TeacherRegister";
import TeacherDash from "./screens/TeacherDash";
import TeacherCourses from "./screens/TeacherCourses";
import TeacherTests from "./screens/TeacherTests";
import AddQuestion from "./screens/AddQuestion";
import StudentLogin from "./screens/StudentLogin";
import StudentRegister from "./screens/StudentRegister";
import StudentDash from "./screens/StudentDash";
import StudentEnrolledCourses from "./screens/StudentEnrolledCourses";
import StudentProfile from "./screens/StudentProfile"
import UnderConstruction from "./screens/UnderConstruction.jsx"
import './App.css';
import Footer from "./components/Footer";




function App({history}) {
  
  const dispatch = useDispatch()
  const teacherLogin = useSelector(state => state.teacherLogin)
  const {loading, error, teacherInfo} = teacherLogin
  const studentLogin = useSelector(state => state.studentLogin)
  const{studentInfo} = studentLogin
    useEffect(()=>{
      if(studentInfo){
        console.log("here ",studentInfo)
        import("./actions/studentActions").then((module)=>{
          module.login(studentInfo.stud_email,studentInfo.password)
        })
      }else if(teacherInfo){
          import("./actions/teacherActions").then((module)=>{
            module.login(teacherInfo.tchr_email, teacherInfo.password)
          })
        }
    },[history])
  



  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/tests" component={Tests} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/notices" component={Notices} />
          <Route exact path="/teacher_login" component={TeacherLogin} />
          <Route exact path="/teacher_register" component={TeacherRegister} />
          <Route exact path="/teacher_dashboard" component={TeacherDash} />
          <Route exact path="/teacher_courses" component={TeacherCourses} />
          <Route exact path="/teacher_tests" component={TeacherTests} />
          <Route exact path="/add_question" component={AddQuestion} />
          <Route exact path="/student/login" component={StudentLogin} />
          <Route exact path="/student/register" component={StudentRegister} />
          <Route exact path="/student/dashboard" component={StudentDash} />
          <Route exact path="/student/profile" component={StudentProfile}/>
          <Route exact path="/student/enrolled_course"  component = {StudentEnrolledCourses}/>
          <Route exact path="/*" component={UnderConstruction} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
