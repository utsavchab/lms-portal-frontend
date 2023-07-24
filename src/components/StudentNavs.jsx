import React from 'react';
import { NavLink } from "react-router-dom";

function StudentNavs() {
  return (
    <div>
      <div className="sidebar d-flex flex-column flex-shrink-0 bg-light rounded">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <NavLink to="/student/dashboard" exact className="nav-link p-2 border-bottom" aria-current="page" title="Dashboard">
              <i className="fs-4 bi-speedometer2" role="img"></i>
              <br/>Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/enrolled_course" exact className="nav-link p-2 border-bottom" title="Courses">
              <i className="fs-4 bi-journal-bookmark" role="img"></i>
              <br/>Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/enrolled_test" exact className="nav-link p-2 border-bottom" title="Tests">
              <i className="fs-4 bi-card-checklist" role="img"></i>
              <br/>Tests
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/" exact className="nav-link p-2 border-bottom" title="Results">
              <i className="fs-4 bi-table" role="img"></i>
              <br/>Results
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/student/profile" exact className="nav-link py-3 border-bottom" title="Profile">
              <i className="fs-4 bi-person-square" role="img"></i>
              <br/>Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StudentNavs
