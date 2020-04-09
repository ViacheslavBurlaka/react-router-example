import React from 'react';
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Header/>
      <main className="Content">
        <div className="container">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
