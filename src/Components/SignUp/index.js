import React from "react";
import Form from "react-bootstrap/Form";
import bg from "../../Images/camera.jpg";
import ButtonLight from "./../../SmallComponents/ButtonLight";
import MainNav from "./../Navbar/MainNav";
import Footer from "./../Footer/index";
class SignUp extends React.Component {
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
          style={{ marginBottom: "8rem", marginTop: "2rem" }}
          className="center-div"
        >
          <h1 className="center-div">Sign up</h1>

          <Form>
            <Form.Control className="form--control" placeholder="EMail" />
            <Form.Control className="form--control" placeholder="Password" />
            <div id="buttoncenter" className="center-div">
              <ButtonLight
                style={{
                  boxShadow: "0 2px 2px 1px gray ",
                  borderRadius: "7.5px"
                }}
                color="#193049"
                title="Sign up"
              />
              <ButtonLight
                style={{ borderRadius: "7.5px" }}
                color="#193049"
                hover="true"
                title="Login"
              />
            </div>
          </Form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default SignUp;
