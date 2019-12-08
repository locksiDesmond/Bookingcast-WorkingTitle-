import React from "react";
import MainNav from "./../Navbar/MainNav";
import Form from "react-bootstrap/Form";
import Footer from "./../Footer/index";
import image from "../../Images/cut.jpg";
import NameCard from "../NameCard";
class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="container" style={{ marginBottom: "4rem" }}>
          <div className="div--row">
            <div>
              <h1 className="name deepblue">Booking Casts</h1>
              <p id="header--text">
                Browse through thousand of actors/actresses, stuntmen and for
                your next film
              </p>
            </div>
            <div id="l-image">
              <img style={{ height: "10rem" }} src={image} alt="background" />
            </div>
          </div>
          <div
            style={{
              marginTop: "2rem",
              backgroundColor: "#193049",
              color: "#fff",
              padding: "2rem 1.9rem",
              borderRadius: "10px",
              paddingBottom: "6rem",
              marginBottom: "3rem"
            }}
          >
            <h2 className="h2">Search</h2>
            <Form
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Form.Control
                className="form--control sm"
                placeholder="Location"
              />
              <Form.Control
                className="form--control sm"
                style={{ marginRight: "5rem" }}
                placeholder="Gender"
              />
            </Form>
            <p style={{ marginTop: "2rem", fontSize: "1.5rem" }}>Age range</p>
          </div>
          <p style={{ marginTop: "1rem" }}>Recently Added</p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <NameCard />
            <NameCard />
            <NameCard />
            {/* Map your Name Card here with different data */}
          </div>
          <div className="center-div">
            <button
              style={{ fontSize: "2rem", whiteSpace: "nowrap" }}
              className="whitelike a"
            >
              Load More
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default LandingPage;
