import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Blogs from "./components/BlogPack/Blogs";
import Contact from "./components/Contact/Contact";
import DepartmentDetails from "./components/DepartmentDetails/DepartmentDetails";
import Departments from "./components/Departments/Departments";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/HomePage/Home/Home";
import NavBar from "./components/HomePage/NavBar/NavBar";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <PrivateRoute path="/departmentdetails/:deptId">
            <DepartmentDetails></DepartmentDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blogs></Blogs>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
