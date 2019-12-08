import React from "react";
import bg from "../../Images/camera.jpg";
import MainNav from "./../Navbar/MainNav";
import Footer from "./../Footer/index";
class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <div className="main--body">
          <div className="image--div">
            <img src={bg} alt="camera man" />
          </div>
        </div>
        <div
          style={{ marginBottom: "20rem", marginTop: "2rem" }}
          className="center-div"
        >
          <h1 className="center-div">Contact Us</h1>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default ContactUs;
