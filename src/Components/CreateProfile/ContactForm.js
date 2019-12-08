import React from "react";
import Form from "react-bootstrap/Form";
class ContactForm extends React.Component {
  render() {
    return (
      <Form className="credit--form contact--form">
        <Form.Control className="form--control" placeholder="Email" />
        <Form.Control className="form--control" placeholder="Phone Number" />
        <Form.Control className="form--control" placeholder="FaceBook Link" />
        <Form.Control className="form--control" placeholder="instagram Link" />
        <Form.Control className="form--control" placeholder="Twitter Link" />
        <Form.Control className="form--control" placeholder="Youtube Link" />
      </Form>
    );
  }
}
export default ContactForm;
