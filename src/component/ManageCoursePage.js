import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slugt: "",
    title: "",
    authorId: null,
    category: ""
  });
  function HandleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  }
  return (
    <div>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure?"></Prompt>
      <CourseForm course={course} onChange={HandleChange} />
    </div>
  );
};

export default ManageCoursePage;
