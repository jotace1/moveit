import React, { useState, useEffect, useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import { Container, CountDownBox, StartButton, CancelCicle } from "./styles";

const CountDown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <Container>
      <CountDownBox>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </CountDownBox>

      {hasFinished ? (
        <StartButton type="button" disabled>
          Ciclo encerrado
        </StartButton>
      ) : (
        <>
          {isActive ? (
            <CancelCicle onClick={resetCountDown} type="button">
              Abandonar ciclo
            </CancelCicle>
          ) : (
            <StartButton onClick={startCountDown} type="button">
              Iniciar um ciclo
            </StartButton>
          )}
        </>
      )}
    </Container>
  );
};

export default CountDown;
