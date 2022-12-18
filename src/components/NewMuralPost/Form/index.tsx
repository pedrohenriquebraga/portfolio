import React, { FormEvent, useState } from "react";

import { Container } from "./styles";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("message", message);

    console.log(data);
    
  };

  return (
    <Container>
      <form onSubmit={submitMessage} method="post">
        <div className="input-container">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Your message</label>
          <textarea
            rows={6}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
            required
          />
        </div>
        <button type="submit">Send message</button>
      </form>
    </Container>
  );
};

export default Form;
