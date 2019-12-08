import React from "react";
import bg from "../../Images/camera.jpg";
import MainNav from "./../Navbar/MainNav";
import Footer from "./../Footer/index";
class AboutUs extends React.Component {
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
          style={{ marginBottom: "3em", marginTop: "2rem" }}
          className="center-div"
        >
          <h1 className="center-div">About Us</h1>
        </div>
        <div className="text--family" style={{ padding: "1rem 9rem", fontSize: "1.5rem" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            tenetur velit tempore ipsam nesciunt, labore voluptatum modi beatae
            reiciendis, delectus sapiente illum. Sed illum numquam ipsam.
            Perferendis natus quisquam saepe! ; Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Similique explicabo eaque nemo?
            Explicabo illo, totam sit distinctio, aliquam excepturi incidunt
            architecto ratione maiores ullam blanditiis recusandae, quam
            pariatur dolorem. Ad.
          </p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default AboutUs;
