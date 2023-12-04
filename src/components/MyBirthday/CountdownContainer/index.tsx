import React, { useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";
import Link from "next/link";
import { Container } from "./styles";
import { FiInstagram, FiMessageSquare, FiInbox } from "react-icons/fi";

import { useWindowSize } from "react-use";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import ptBR from "date-fns/locale/pt-BR";
import enUS from "date-fns/locale/en-US";
import {
  formatDuration,
  isToday,
  isAfter,
  Locale,
  intervalToDuration,
} from "date-fns";

const units = [
  "months",
  "days",
  "hours",
  "minutes",
  "seconds",
];

const Countdown: React.FC = () => {
  const t = useTranslations("my_birthday");

  const [isBirthday, setIsBirthday] = useState(false);
  const [countdown, setCountdown] = useState(t("countdown.calc"));
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timer>();

  const { locale, defaultLocale } = useRouter();
  const dateLocale = useMemo<Locale>(() => {
    const locales = {
      "pt-BR": ptBR,
      "en-US": enUS,
    };

    // @ts-ignore
    return locales[locale || defaultLocale];
  }, [locale, defaultLocale]);

  const { width, height } = useWindowSize();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentYearBirthday = new Date(`04/14/${currentYear}, 00:00`);

    if (isToday(currentYearBirthday)) {
      setIsBirthday(true);
      return;
    }

    const nextBirthdayDate = isAfter(date, currentYearBirthday)
      ? new Date(`04/14/${currentYear + 1}, 00:00`)
      : currentYearBirthday;

    const duration = intervalToDuration({
      start: nextBirthdayDate,
      end: date,
    });

    let nonzero = Object.entries(duration)
      .filter(([_, value]) => value || 0 > 0)
      .map(([unit, _]) => unit);
    const formatCountdown = formatDuration(duration, {
      format: units.filter((i) => new Set(nonzero).has(i)).slice(0, 3),
      delimiter: ", ",
      locale: dateLocale,
      zero: true,
    });

    setCountdown(formatCountdown);

    const interval = setInterval(() => {
      const date = new Date();

      if (date.getDate() === 14 && date.getMonth() === 3) {
        setIsBirthday(true);
        clearInterval(countdownInterval);
        return;
      }

      const duration = intervalToDuration({
        start: nextBirthdayDate,
        end: date,
      });

      nonzero = Object.entries(duration)
        .filter(([_, value]) => value || 0 > 0)
        .map(([unit, _]) => unit);
      const formatCountdown = formatDuration(duration, {
        format: units.filter((i) => new Set(nonzero).has(i)).slice(0, 3),
        delimiter: ", ",
        locale: dateLocale,
        zero: true,
      });
      setCountdown(formatCountdown);
    }, 1000);

    setCountdownInterval(interval);

    return () => {
      clearInterval(countdownInterval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {!isBirthday ? (
        <div id="countdown-container">
          <Confetti
            gravity={0.07}
            friction={0.98}
            width={width - 20}
            height={height}
            colors={["#ffffff44"]}
            numberOfPieces={230}
          />
          <p className="animate__animated animate__fadeIn animated__delay-1.5s">
            {t("countdown.missing_time")}
          </p>
          <h1 className="animate__animated animate__pulse">
            {countdown.toUpperCase()}
          </h1>
          <p className="animate__animated animate__fadeIn animated__delay-1.5s">
            {t.rich("countdown.years_old_text", {
              yearsOld: 19,
              bold: (child) => <strong>{child}</strong>,
              sup: (child) => <sup>{child}</sup>,
            })}
          </p>
        </div>
      ) : (
        <div
          className="animate__animated animate__fadeIn"
          id="birthday-container"
        >
          <Confetti
            hidden={!isBirthday}
            gravity={0.07}
            friction={0.98}
            width={width - 20}
            height={height}
            numberOfPieces={230}
          />
          <h1>{t("birthday.title")}</h1>
          <p>{t("birthday.subtitle")}</p>
          <div id="send-message-buttons">
            <a
              href="https://instagram.com/pedro_henriquebraga"
              rel="external noreferrer"
              target="_blank"
              className="send-message-button instagram"
            >
              <FiInstagram size={20} style={{ verticalAlign: "top" }} />{" "}
              {t("birthday.buttons.instagram")}
            </a>
            <Link href="/my-birthday/mural/new">
              <a className="send-message-button mural">
                <FiMessageSquare size={20} style={{ verticalAlign: "top" }} />{" "}
                {t("birthday.buttons.new_in_mural")}
              </a>
            </Link>
            <Link href="/my-birthday/mural">
              <a className="send-message-button">
                <FiInbox size={20} style={{ verticalAlign: "top" }} />{" "}
                {t("birthday.buttons.show_mural")}
              </a>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Countdown;
