import React from "react";
import Form from "react-bootstrap/Form";
class CreateProfile extends React.Component {
  render() {
    return (
      <Form className="credit--form create--profile">
        <Form.Control className="form--control" placeholder="First name" />
        <Form.Control className="form--control" placeholder="Last Name" />
        <select className="form--control" placeholder="Gender">
          <option name="gender">Gender</option>
        </select>
        <Form.Control className="form--control" placeholder="Age" />
        <Form.Control
          className="form--control"
          placeholder="Height in inches"
        />
        <Form.Control className="form--control" placeholder="Weight in kg" />
        <Form.Control className="form--control" placeholder="Body Type" />
        <Form.Control className="form--control" placeholder="Hair color" />
        <Form.Control className="form--control" placeholder="Eye Color" />
        <Form.Control className="form--control" placeholder="Location" />
        <Form.Control className="form--control" placeholder="Language Spoken" />
        <p>use a comma for seperation</p>
      </Form>
    );
  }
}
export default CreateProfile;
