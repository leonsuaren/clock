import { type FC, useState, useEffect } from "react";

import { ClockWrapper, TimeStyled, DotsTimeStyled } from "./styled.ts";

const Clock: FC = () => {
  const [ time, setTime ] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  const [ onBlink, setOnBlink ] = useState(false);

  useEffect(() => {
     setInterval(() => {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
      setOnBlink(s => !s);
    }, 1000);
  }, []);

  console.log(onBlink);

  const onConvertToString = (number: number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  return (
    <>
      <ClockWrapper>
        <TimeStyled>{onConvertToString(time.hours)}</TimeStyled>
        <DotsTimeStyled> : </DotsTimeStyled>
        <TimeStyled>{onConvertToString(time.minutes)}</TimeStyled>
        <DotsTimeStyled> {onBlink ? ' : ' : ''} </DotsTimeStyled>
        <TimeStyled>{onConvertToString(time.seconds)}</TimeStyled>
        <TimeStyled>{time.hours >= 12 ? ' PM' : ' AM'}</TimeStyled>
      </ClockWrapper>
    </>
  );
};

export default Clock;
