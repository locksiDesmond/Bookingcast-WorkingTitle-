import React from "react";
import profile from "../../Images/demogirl.jpg";
class NameCard extends React.Component {
  render() {
    return (
      <div className="namecard">
        <img src={profile} alt="profile" />
        <div className="namecard-name">Name of person</div>
      </div>
    );
  }
}
export default NameCard;
