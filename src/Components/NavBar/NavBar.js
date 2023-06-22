import React, { useState } from "react";
import "./NavBar.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Product from "../Product/Product";

const NavBar = () => {
  const [abouPage, setabouPage] = useState(true);
  const [contactPage, setcontactPage] = useState(false);
  const [productPage, setproductPage] = useState(false);
  const [blogPage, setblogPage] = useState(false);

  const handleContactPage = () => {
    setcontactPage(true);
    setabouPage(false);
    setproductPage(false);
    setblogPage(false);
  };

  const handleProductPage = () => {
    setproductPage(true);
    setabouPage(false);
    setcontactPage(false);
    setblogPage(false);
  };

  const handleBlogPage = () => {
    setproductPage(false);
    setabouPage(false);
    setcontactPage(false);
    setblogPage(true);
  };

  const handleAboutPage = () => {
    setproductPage(false);
    setabouPage(true);
    setcontactPage(false);
    setblogPage(false);
  };

  

  return (
    <div className="nav-bar-main-flex-div">
      <div className="nav-bar-main-width-div">
        <div className="nav-bar-main-main-div">
          <div className="nav-bar-main-div-one">
            <div>
              <h3 className="nav-bar-h-tag">Logo</h3>
            </div>
            <div>
              <h3 className={abouPage ? "nav-bar-h-tag-active" :  "nav-bar-h-tag"} onClick={handleAboutPage}>
                About
              </h3>
            </div>
            <div>
              <h3 className={contactPage ? "nav-bar-h-tag-active" :  "nav-bar-h-tag"} onClick={handleContactPage}>
                Contact
              </h3>
            </div>
            <div>
              <h3 className={productPage ? "nav-bar-h-tag-active" :  "nav-bar-h-tag"} onClick={handleProductPage}>
                Products
              </h3>
            </div>
            <div>
              <h3 className={blogPage ? "nav-bar-h-tag-active" :  "nav-bar-h-tag"} onClick={handleBlogPage}>
                Blog
              </h3>
            </div>
          </div>
        </div>

        {abouPage && <About />}
        {contactPage && <Contact />}
        {blogPage && <Blog />}
        {productPage && <Product />}
      </div>
    </div>
  );
};

export default NavBar;
