import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdEmail } from "react-icons/md";
import "./Scss/Navbar.scss";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { PopupForm } from "./PopupForm";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "#09101A",

  boxShadow: 24,
};
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div div className="navbar-parent">
      <nav className="navbar">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>

        <div style={{ marginLeft: "-80px" }}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="link" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className="link"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>

            <Link to='/services'   className="link"
                style={{ textDecoration: "none" }}>
            <li className="nav-item">Services</li>
            </Link>

           <Link to='/projects'  style={{ textDecoration: "none" }}>
           <li className="nav-item">Projects</li>
           </Link>
          </ul>
        </div>
        <div className="contact" style={{ marginRight: "" }}>
          <button onClick={handleOpen}>
            <MdEmail style={{ marginTop: "10px" }} />
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <PopupForm />
            </Typography>
          </Box>
        </Modal>
        <div className="nav-icon" onClick={handleClick}>
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

          {click ? (
            <span className="icon">
              <AiOutlineClose />{" "}
            </span>
          ) : (
            <span className="icon">
              <GiHamburgerMenu />
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
