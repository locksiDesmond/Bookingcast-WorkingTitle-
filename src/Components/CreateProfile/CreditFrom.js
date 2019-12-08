import React from "react";
import Form from "react-bootstrap/Form";
class CreditForm extends React.Component {
  render() {
    return (
      <Form className="credit--form">
        <Form.Control className="form--control" placeholder="Project Title" />
        <Form.Control className="form--control" placeholder="Role" />
        <Form.Control className="form--control" placeholder="Link" />
      </Form>
    );
  }
}
export default CreditForm;
