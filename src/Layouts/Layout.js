import React from "react";
import { Outlet } from "react-router-dom";
import "./layoutStyles.css";
// layout inside of it children components will be rendered
const Layout = () => {
  return (
    <div className="root">
      <main className="appContent">
        <div className="appBar">
          <p>Posts App</p>
        </div>
        {/* components associated to routes will be render in here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
