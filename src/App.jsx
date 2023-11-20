import { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomeView from "./views/HomeView";
import CreateUserView from "./views/users/CreateUserView";
import DetailUserView from "./views/users/DetailUserView";
import EditUserView from "./views/users/EditUserView";
import DashboardUserView from "./views/users/DashboardUserView";
import CreateFormulirView from "./views/formulir/CreateFormulirView";
export default class App extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route path="/users" element={<DashboardUserView />}></Route>
            <Route path="/create" element={<CreateUserView />}></Route>
            <Route path="/detail/:id" element={<DetailUserView />}></Route>
            <Route path="/edit/:id" element={<EditUserView />}></Route>
            <Route path="/formulir/create" element={<CreateFormulirView />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
