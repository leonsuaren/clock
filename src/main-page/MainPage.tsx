import { type FC } from "react";

import Clock from "./../components/clock/Clock";

import { MainPageStyled } from "./styled.ts";

const MainPage: FC = () => {
  return (
    <MainPageStyled>
      <Clock />
    </MainPageStyled>
  );
};

export default MainPage;
