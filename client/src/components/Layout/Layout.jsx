import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

// Default props
Layout.defaultProps = {
  title: "Ecommerce App - shop now",
  description: "Mern Stack Project",
  keywords: "mern,node,express,react,mongodb,html,css,javascript",
  author: "Myself",
};

export default Layout;
