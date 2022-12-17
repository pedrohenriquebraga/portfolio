import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { formatDistanceToNow, isToday, isAfter } from "date-fns";
import { FiInstagram, FiMessageSquare, FiInbox } from "react-icons/fi";

import { useWindowSize } from "react-use";
import { Container } from "./styles";
import Link from "next/link";

const Countdown: React.FC = () => {
  const [isBirthday, setIsBirthday] = useState(false);
  const [countdown, setCountdown] = useState("Calculating...");
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timer>();

  const { width, height } = useWindowSize();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentYearBirthday = new Date(`04/14/${currentYear}`);

    if (isToday(currentYearBirthday)) {
      setIsBirthday(true);
      return;
    }

    const nextBirthdayDate = isAfter(date, currentYearBirthday)
      ? new Date(`04/14/${currentYear + 1}`)
      : currentYearBirthday;

    setCountdown(
      formatDistanceToNow(nextBirthdayDate, {
        includeSeconds: true,
      })
    );

    const interval = setInterval(() => {
      const date = new Date();

      if (date.getDate() === 14 && date.getMonth() === 3) {
        setIsBirthday(true);
        clearInterval(countdownInterval);
        return;
      }

      const formatCountdown = formatDistanceToNow(nextBirthdayDate, {
        includeSeconds: true,
      });
      setCountdown(formatCountdown);
    }, 1000);

    setCountdownInterval(interval);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <Container>
      {!isBirthday ? (
        <div id="countdown-container">
          <p className="animate__animated animate__fadeIn animated__delay-1.5s">
            Exactly missing
          </p>
          <h1 className="animate__animated animate__pulse">
            {countdown.toUpperCase()}
          </h1>
          <p className="animate__animated animate__fadeIn animated__delay-1.5s">
            for my{" "}
            <strong>
              18<sup>th</sup> birthday
            </strong>
          </p>
        </div>
      ) : (
        <div id="birthday-container">
          <Confetti
            hidden={!isBirthday}
            numberOfPieces={140}
            gravity={0.07}
            friction={0.98}
            width={width - 20}
            height={height}
          />
          <h1>🎉 Today is my birthday 🎉</h1>
          <p>How about leaving a message for me?</p>
          <div id="send-message-buttons">
            <a
              href="https://instagram.com/pedro_henriquebraga"
              rel="external noreferrer"
              target="_blank"
              className="send-message-button instagram"
            >
              <FiInstagram size={20} style={{ verticalAlign: "top" }} /> Send
              message on Instagram
            </a>
            <Link href="/my-birthday/mural/new">
              <a className="send-message-button mural">
                <FiMessageSquare size={20} style={{ verticalAlign: "top" }} />{" "}
                Send message on Mural
              </a>
            </Link>
            <Link href="/my-birthday/mural">
              <a className="send-message-button">
                <FiInbox size={20} style={{ verticalAlign: "top" }} />{" "}
                Access the Birthday Mural
              </a>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Countdown;
