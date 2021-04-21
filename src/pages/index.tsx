import ExperienceBar from "../components/ExperienceBar";
import CompletedChallenges from "../components/CompletedChallenges";
import Profile from "../components/Profile";
import CountDown from "../components/CountDown";
import ChallengeBox from "../components/ChallengeBox";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import {
  ChallengeBoxDiv,
  Container,
  ProfileBox,
} from "../styles/dashboardstyle";

import Head from "next/head";
import { GetServerSideProps } from "next";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <CountdownProvider>
        <div
          style={{
            height: "100vh",
            maxWidth: "992px",
            margin: "0 auto",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ExperienceBar />

          <Container>
            <ProfileBox>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </ProfileBox>
            <ChallengeBoxDiv>
              <ChallengeBox />
            </ChallengeBoxDiv>
          </Container>
          <Head>
            <title>Início | move.it</title>
          </Head>
        </div>
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
