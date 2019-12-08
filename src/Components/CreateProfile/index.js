import React from "react";
import bg from "../../Images/camera.jpg";
import MainNav from "./../Navbar/MainNav";
import Footer from "./../Footer/index";
// import Next from"./Next"
import UploadProfile from "./UploadProfile";

class CreateProfile extends React.Component {
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
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          className="center-div des--con"
        >
          <h1 className="center-div">Create profile</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: ".4rem 10rem"
          }}
          className="des--con"
        >
          {/* Ontoggle Change the  toggle between color (bg-blacklike and bg-whitelike )*/}
          <div
            className="bg-whitelike circle--toggle"
            style={{ marginRight: "1.5rem" }}
          ></div>
          <div className="bg-blacklike circle--toggle"></div>
        </div>
        {/* <Next/> */}
        <UploadProfile />
        <Footer />
      </React.Fragment>
    );
  }
}
export default CreateProfile;
