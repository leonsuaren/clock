import { type FC } from 'react';

import { ClockStyled } from './styled.ts';

const Clock: FC = () => {
  return (
    <ClockStyled>12 : 00 : 00</ClockStyled>
  )
}

export default Clock;