import React from "react";
import MainNav from "../Navbar/MainNav";
import profile from "../../Images/demogirl.jpg";
import Footer from "./../Footer/index";
import Credits from './Credits'
const Items= (category , value )=>{
  return(
     <div>

<div className="category" >
  {category} :
</div>
<div>{value}</div>
</div>
  )
}
class DescriptionPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <div>
          <div
            style={{ borderRadius: "0" }}
            className="bg-deepblue whitelike jumbotron"
          >
            <p
              className="h2"
              style={{ textAlign: "center", fontSize: "4.5rem" }}
            >
              Name of Author
            </p>
          </div>
          <div className="des--row des--con">
            <div>
              <img alt="profile" src={profile} />
              <div
                className="image-bundles"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* Loop over images here */}
                <img src={profile} alt="Others" />
                <img src={profile} alt="Others" />
                <img src={profile} alt="Others" />
              </div>
            </div>

            <div>
              <div className="hr--big"></div>
              <div>
                <p>Basic Information</p>
              </div>
              <div className="des--lists">
                {/* Run loop of data over this list item */}
               {Items("Gender" , "Male")}
               {Items("Age" , "21")}
              </div>
            </div>
          </div>
          <div className="des--con">
            <div className="hr--big"></div>
            <p>About me</p>
            <div className="text--family">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, itaque nulla! Asperiores doloremque impedit nobis
                eaque rem veritatis mollitia iste autem repudiandae ex suscipit
                ullam, laborum obcaecati harum optio nihil!
              </p>
            </div>
            <div className="hr--big"></div>
            <p>About me</p>
            <section className="des--credits">
              <Credits />
              <Credits />
              <Credits />
              <Credits />
            </section>
            <div className="hr--big"></div>
            <p>Contact</p>
            <div className="des--contact">
              <p>mall</p>

              <p>mall</p>
              <p>mall</p>
              <p>mall</p>
              <p>mall</p>

              <p>mall</p>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default DescriptionPage;
