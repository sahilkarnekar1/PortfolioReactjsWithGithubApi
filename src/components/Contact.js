import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #fff;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid white;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-top: 1rem;
`;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <FormWrapper>
      {!isSubmitted ? (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" rows="5" required />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      ) : (
        <SuccessMessage>Submitted!</SuccessMessage>
      )}
    </FormWrapper>
  );
};

export default ContactForm;
