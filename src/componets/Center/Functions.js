import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
// import fRegistration from "./Registration";
import AdminNavbar from "./AdminNavbar";
import addDonors from "./addDonors";
import showDonors from "./ShowDonors";
import Prof from "./Prof";
import ProfileEdit from "./ProfileEdit";
import orders from "./orders";

function App() {
  return (
    <Router>
      <div className="">
        <AdminNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/Center/Home"} component={AdminHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/Center/addDonors"} component={addDonors} />
          <Route path={"/Center/showDonors"} component={showDonors} />
          <Route path={"/Center/Profile"} component={Prof} />
          <Route path={"/Center/ProfileEdit"} component={ProfileEdit} />
          <Route path={"/Center/orders"} component={orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
