import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../utils/helpers';
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
  const handleValidation = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setUserMessage('invalid email')
      } else { setUserMessage('') }

    } else {
      if (!e.target.value.length) {
        setUserMessage('this is a required field')
      } else { setUserMessage('') }
    }


  }



  return (
    <div>
      <h1>Contact Me</h1>
      <Form onChange={handleSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name Here" name='name' onChange={handleChange} value={formState.name} onBlur={handleValidation}/> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='email' onChange={handleChange} value={formState.email} onBlur={handleValidation}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name='message' onChange={handleChange} value={formState.message} onBlur={handleValidation}/>
        </Form.Group>
        {userMessage &&(
          <p>{userMessage}</p>
        )}
        <Button variant="primary" type="submit" disabled={!formState.email || !formState.name || !formState.message }>
          Submit
        </Button>
      </Form>
    </div>
  );
}
