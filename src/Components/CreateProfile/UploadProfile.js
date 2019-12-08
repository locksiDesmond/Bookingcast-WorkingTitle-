import React from "react";
import profile from "../../Images/demogirl.jpg";
import CreateProfile from "./CreateProfile";
import ButtonLight from "../../SmallComponents/ButtonLight";
class UploadProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="des--row des--con">
          <div>
            <p>Upload Profile image</p>
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
            <div className="des--lists" style={{ paddingTop: "2rem" }}>
              <ul className="list-unstyled">
                <li> File format: JPG or JPEG.</li>
                <li> Recommended dimensions: 3000x3000.</li>
                <li> Images should not be larger than 10 Mb.</li>
                <li>
                  Minimum of two (2) images and maximum of four (4) images
                  should be uploaded.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="des--con" style={{ marginRight: "19rem" }}>
          <CreateProfile />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight:"10rem", marginBottom:"10rem" }}>
      <ButtonLight style={{ height: "4.5rem", width: "8rem" , boxShadow: "0 2px 2px 1px gray ",}} title="Next" color="#193049" />
    </div>      </React.Fragment>
    );
  }
}
export default UploadProfile;
