import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { Prompt } from "react-router-dom";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slugt: "",
    title: "",
    authorId: null,
    category: ""
  });
  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course);
  }
  return (
    <div>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure?"></Prompt>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManageCoursePage;
