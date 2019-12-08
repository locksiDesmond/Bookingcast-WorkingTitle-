import React from "react";
import Form from "react-bootstrap/Form";
import bg from "../../Images/camera.jpg";
import ButtonLight from "./../../SmallComponents/ButtonLight";
import MainNav from "./../Navbar/MainNav";
import Footer from "./../Footer/index";
class Login extends React.Component {
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
          <h1 className="center-div">LOG IN</h1>

          <Form>
            <Form.Control className="form--control" placeholder="EMail" />
            <Form.Control className="form--control" placeholder="Password" />
            <Form.Group>
              <input type="checkbox" />
              <div className="text--family">
                <p> Remember Me</p>
              </div>
            </Form.Group>
            <div id="buttoncenter" className="center-div">
              <ButtonLight
                style={{ boxShadow: "0 2px 2px 1px gray " }}
                color="#193049"
                title="Sign up"
              />
              <ButtonLight color="#193049" hover="true" title="Login" />
            </div>
          </Form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Login;
