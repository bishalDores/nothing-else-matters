import React from "react";
import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="nav_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 nav_wrapper_inner">
            <div className="logo">
              <h1>
                <Link href="/">
                  <a>Logo Here</a>
                </Link>
              </h1>
            </div>
            <div className="menus">
              <div className="main_menus">
                <ul className="list-unstyled">
                  <li>
                    <Link href={"/"}>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a className="active">Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a>Hotline</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a>Categories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
                <div className="nav_right">
                  <img src="/images/headline.png" />
                  <div className="nav_icon">
                    <BsSuitHeart color="white" />
                    <AiOutlineShoppingCart color="white" />
                    <AiOutlineUser color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
