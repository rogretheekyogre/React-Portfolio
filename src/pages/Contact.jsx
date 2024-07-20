import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [userMessage, setUserMessage] = useState("")
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
setUserMessage("email sent")
setFormState({ name: "", email: "", message: "" })
  }




  return (
    <div>
      <h1>Contact Me</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <p>{userMessage}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
