import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICountdownContextData } from "../interfaces/ICountdownContextData";
import { ChallengesContext } from "./ChallengesContext";

interface ChallengesProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext<ICountdownContextData>(
  {} as ICountdownContextData
);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ChallengesProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountDown = () => {
    setIsActive(true);
  };

  const resetCountDown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
