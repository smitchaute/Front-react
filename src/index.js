/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// core components
//import Admin from "./layouts/Admin.js";

import "./assets/css/material-dashboard-react.css?v=1.9.0";
import "./assets/css/style.css";
import Login from "./components/Login/Login";
import Index from "./views/Index/index";
import Contact from "./views/Contact/contact";
import Dashboard from "./views/Dashboard/Dashboard.js";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin/login" component={Login} />
            <Route path="/admin/Dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Index} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
