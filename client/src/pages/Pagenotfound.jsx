import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

//Pagenotfound
const Pagenotfound = () => {
  return (
    <Layout title={"page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h3 className="pnf-heading">Oops! Page Not Found</h3>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
