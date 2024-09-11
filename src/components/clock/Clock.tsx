import { type FC, useState, useEffect } from "react";

import { ClockStyled } from "./styled.ts";

const Clock: FC = () => {
  const [ time, setTime ] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  useEffect(() => {
     setInterval(() => {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
  }, []);

  const onConvertToString = (number: number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  return (
    <>
      <ClockStyled>
        <span>{onConvertToString(time.hours)}</span>
        <span> : </span>
        <span>{onConvertToString(time.minutes)}</span>
        <span> : </span>
        <span>{onConvertToString(time.seconds)}</span>
        <span>{time.hours >= 12 ? ' PM' : ' AM'}</span>
      </ClockStyled>
    </>
  );
};

export default Clock;
