import Router from "next/router";
import React, { FormEvent, useState } from "react";

import { Container } from "./styles";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [sendingPost, setSendingPost] = useState(false);

  const submitMessage = async (e: FormEvent) => {
    setSendingPost(true);
    e.preventDefault();

    const data = {
      name,
      message,
    };

    const res = await fetch("/api/birthday-posts", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json());
    setSendingPost(false);

    if (res.success) {
      Router.push("/my-birthday/mural", {
        pathname: "/my-birthday/mural"
      });
    }
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
        <button
          disabled={sendingPost || !name || !message}
          type="submit"
        >
          {
            sendingPost ? "Sending message..." : "Send message"
          }
        </button>
      </form>
    </Container>
  );
};

export default Form;
