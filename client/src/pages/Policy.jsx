import React from "react";
import Layout from "../components/Layout/Layout";

//Policy page
const Policy = () => {
  return (
    <Layout title={"Privacy & Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy & Policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privacy Policy</h1>
          <p className="text-justify mt-2">
            <br />
            <u>Information Sharing : </u> We do not sell, trade, or otherwise
            transfer your personal information to outside parties. However, we
            may share your information with trusted third parties who assist us
            in operating our website, conducting our business, or servicing you.
            <br />
            <u>Security : </u> We implement a variety of security measures to
            protect your personal information. However, no method of
            transmission over the internet or electronic storage is 100% secure.
            Therefore, we cannot guarantee absolute security.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
