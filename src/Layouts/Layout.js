import React from "react";
import { Outlet } from "react-router-dom";
import "./layoutStyles.css";
const Layout = () => {
  return (
    <div className="root">
      <main className="appContent">
        <div className="appBar">
          <p>Posts App</p>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
