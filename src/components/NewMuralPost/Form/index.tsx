import { useTranslations } from "next-intl";
import Router from "next/router";
import React, { FormEvent, useState } from "react";

import { Container } from "./styles";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [sendingPost, setSendingPost] = useState(false);

  const t = useTranslations("new_mural_post")

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
        pathname: "/my-birthday/mural",
        query: {
          "created-post": "1",
        }
      });
    }
  };

  return (
    <Container>
      <form onSubmit={submitMessage} method="post">
        <div className="input-container">
          <label htmlFor="name">{t("form.labels.name")}</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">{t("form.labels.msg")}</label>
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
            sendingPost ? t("form.button.sending") : t("form.button.send")
          }
        </button>
      </form>
    </Container>
  );
};

export default Form;
