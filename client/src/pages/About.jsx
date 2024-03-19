import React from "react";
import Layout from "../components/Layout/Layout";

//About page
const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to "My Ecommerce Website" - Your Ultimate Destination for
            Exceptional Shopping Experiences! At Ecommerce Website, we believe
            that shopping should be more than just a transaction; it should be
            an experience that delights and inspires. We are your one-stop
            online destination for a diverse range of high-quality products,
            curated with care to cater to your unique needs and desires.
            <br />
            <u>Our Story:</u>
            <br /> Founded in 2023, "My Ecommerce Website" emerged from a
            passion for connecting people with products that enhance their
            lives. Our journey began with a simple vision - to create an online
            marketplace where customers can discover a carefully selected
            assortment of items, from everyday essentials to exclusive
            treasures.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
