import React, { useEffect, useMemo, useState } from "react";
import { formatDistanceToNow, isToday, isAfter } from "date-fns";

import { Container } from "./styles";

const Countdown: React.FC = () => {
  const [isBirthday, setIsBirthday] = useState(false);
  const [countdown, setCountdown] = useState("Calculating...");

  const date = useMemo(() => new Date(), []);
  const currentYear = date.getFullYear();

  useEffect(() => {
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

    const countdownInterval = setInterval(() => {
      const formatCountdown = formatDistanceToNow(nextBirthdayDate, {
        includeSeconds: true,
      });
      setCountdown(formatCountdown);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [currentYear, date]);

  return (
    <Container>
      {!isBirthday && (
        <div id="countdown-container">
          <p className="animate__animated animate__fadeInRight animate__delay-1s">
            Exactly missing
          </p>
          <h1 className="animate__animated animate__zoomInDown animate__delay-0.5s">
            {countdown.toUpperCase()}
          </h1>
          <p className="animate__animated animate__fadeInLeft animate__delay-1s">
            for my{" "}
            <strong>
              18<sup>th</sup> birthday
            </strong>
          </p>
        </div>
      )}
    </Container>
  );
};

export default Countdown;
