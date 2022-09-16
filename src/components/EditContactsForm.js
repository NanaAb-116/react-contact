import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditContact } from "../actions/contactActions";

function EditUserForm({ contactData, handleEdit, hide }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(contactData.name);
  const [phone, setPhone] = useState(contactData.phone);
  const [location, setLocation] = useState(contactData.location);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditContact({ id: contactData.id, name, phone, location }));
    setName("");
    setPhone("");
    setLocation("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="gen"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditUserForm;
