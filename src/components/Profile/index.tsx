import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import {
  ProfileContainer,
  ProfileImg,
  ProfileInfoBox,
  ProfileLevel,
  ProfileName,
} from "./styles";

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <ProfileImg src="https://github.com/jotace1.png" alt="João Carlos" />
      <ProfileInfoBox>
        <ProfileName>João Carlos</ProfileName>
        <ProfileLevel>
          <img src="icons/level.svg" alt="Level.svg" />
          Level {level}
        </ProfileLevel>
      </ProfileInfoBox>
    </ProfileContainer>
  );
};

export default Profile;
