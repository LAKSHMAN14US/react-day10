import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Have a question or comment about TravelApp? We'd love to hear from you! Please fill out the form below and we'll get back
        to you as soon as possible.
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
