import React, { useState } from "react";
import {
  Form,
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { validateEmail } from "../utils/helpers";

function Contact() {
  const [FormState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = FormState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", FormState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(<Header as="h3">Message is required!</Header>);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...FormState, [e.target.name]: e.target.value });
      console.log("Handle Form", FormState);
    }
  };

  return (
    <Segment>
      <Header as="h2">Contact</Header>
      <Form id="contact-Form" onSubmit={handleSubmit}>
        <Form.Field className="Form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="Form-control"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Field>
        <Form.Field className="Form-group">
          <label htmlFor="email">Email address:</label>
          <input
            className="Form-control"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </Form.Field>
        <Form.Field className="Form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="Form-control"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Field>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button className="btn btn-secondary" type="submit"  color="black">
          Submit
        </Button>
      </Form>
    </Segment>
  );
}

export default Contact;
