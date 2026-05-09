import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  content: string | React.ReactNode;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, content, icon }) => {
  return (
    <CardContainer>
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      <div className="content">{content}</div>
    </CardContainer>
  );
};

export default Card;
