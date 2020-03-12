import React, { useState } from 'react';
import { Button, Tabs, Hero, Container, Section, Level, Form, Columns, Content, Navbar } from 'react-bulma-components';

const Contact = () => {
  
  return (
  	<form action="https://formspree.io/mrgbdqqp" method="POST">
      <Form.Field>
        <Form.Label>Name</Form.Label>
        <Form.Control>
          <input className="input" type="text" name="name" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <input className="input" type="email" name="_replyto" />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Control>
          <textarea className="textarea" rows="10" name="message"></textarea>
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Button className="is-fullwidth is-primary" type="submit">Send</Button>
      </Form.Field>
  	</form>
  );
}

export default Contact;