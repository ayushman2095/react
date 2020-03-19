import React from "react";
import HomePage from "./HomePage";
import AboutPages from "./AboutPages";
import Header from "../common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route path="/course/:slug" component={ManageCoursePage}></Route>
        <Route path="/course" component={ManageCoursePage}></Route>
        <Route path="/about" component={AboutPages}></Route>
        <Route path="/" exact component={HomePage}></Route>
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}
export default App;
