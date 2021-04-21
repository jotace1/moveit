import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import {
  ChallengeActive,
  ChallengeNotActive,
  Container,
  FailedButton,
  SucceededButton,
} from "./styles";

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailedButton onClick={handleChallengeFailed}>Falhei</FailedButton>
            <SucceededButton onClick={handleChallengeSucceeded}>
              Completei
            </SucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level complentando desafios
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
