import React from "react";
import "./assets/css/index.css";
import "./assets/plugins/fontawesome-free/css/all.min.css";
import "./assets/dist/css/adminlte.min.css";
import Header from "./partial/header";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content-wrapper">
          <section className="content">
            <Outlet />
          </section>
        </div>
        {/* <aside className="control-sidebar control-sidebar-dark"></aside> */}
      </div>
    </div>
  );
}
export default Index;
