import React from "react";
class MainNav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="list-unstyled list-inline capitialize">
          <li className="list-inline-item "> About us</li>
          <li className="list-inline-item">Contact</li>
          <li className="list-inline-item">Log In</li>
          <li className="list-inline-item">Sign Up</li>
        </ul>
        <div>{/* Put logo here */}</div>
      </nav>
    );
  }
}
export default MainNav;
