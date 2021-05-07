import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { useSession } from "next-auth/client";
import {
  ProfileContainer,
  ProfileImg,
  ProfileInfoBox,
  ProfileLevel,
  ProfileName,
} from "./styles";

const Profile: React.FC = () => {
  const [session] = useSession();
  const { level } = useContext(ChallengesContext);

  const user = session ? session.user : null;

  return (
    <ProfileContainer>
      <ProfileImg src={`${user?.image}`} alt="João Carlos" />
      <ProfileInfoBox>
        <ProfileName>{user?.name}</ProfileName>
        <ProfileLevel>
          <img src="icons/level.svg" alt="Level.svg" />
          Level {level}
        </ProfileLevel>
      </ProfileInfoBox>
    </ProfileContainer>
  );
};

export default Profile;
