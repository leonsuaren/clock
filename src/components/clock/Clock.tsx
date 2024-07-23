import { type FC } from 'react';

import { ClockStyled } from './styled.ts';

const Clock: FC = () => {
  const d = new Date();
  let time = d.toLocaleTimeString();
  let hours = time.slice(0, 1);
  let minutes = time.slice(2, 4);
  let seconds = time.slice(5, 7);
  let meridiano = time.slice(8 , 10);
  

  return (
    <>
    <ClockStyled>{hours} : {minutes} : {seconds} {meridiano}</ClockStyled>
    </>

  )
}

export default Clock;