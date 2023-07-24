
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../actions/courseActions';
import CourseBox from './CourseBox';
import { NavLink } from "react-router-dom";
import bck from "../assets/img/workspace.jpg";

function Features() {
  const dispatch = useDispatch();
  const courseList = useSelector(state => state.courseList);
  const { loading, error, courses } = courseList;

  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);

  return (
    <div>

      <div className="row gy-5 g-lg-5 mb-4">
        {courses &&
          courses.map(course => (
            <CourseBox
              key={course.id}
              courseName={course.course_name}
              courseOutline={course.course_outline}
            />
          ))}
      </div>

      
    </div>
  );
}

export default Features;
