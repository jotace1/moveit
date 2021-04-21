import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import {
  BarBox,
  XpNumber,
  Bar,
  CompletedBar,
  CurrentExperience,
} from "./styles";

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <BarBox>
      <XpNumber>0 xp</XpNumber>
      <Bar>
        <CompletedBar style={{ width: `${percentToNextLevel}%` }} />

        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </CurrentExperience>
      </Bar>
      <XpNumber>{experienceToNextLevel} xp</XpNumber>
    </BarBox>
  );
};

export default ExperienceBar;
