import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import CountDown from '../components/CountDown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import SideBar from '../components/SideBar'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import {
    ChallengeBoxDiv,
    Container,
    ItemsBox,
    ProfileBox,
} from '../styles/dashboardstyle'

interface DashboardProps {
    session: any
    level: number
    currentExperience: number
    challengesCompleted: number
}
export default function Dashboard(props: DashboardProps) {
    return (
        <>
            <Container>
                <SideBar />
                <ChallengesProvider
                    level={props.level}
                    currentExperience={props.currentExperience}
                    challengesCompleted={props.challengesCompleted}
                >
                    <CountdownProvider>
                        <div
                            style={{
                                height: '100vh',
                                maxWidth: '992px',
                                margin: '0 auto',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <ExperienceBar />

                            <ItemsBox>
                                <ProfileBox>
                                    <Profile />
                                    <CompletedChallenges />
                                    <CountDown />
                                </ProfileBox>
                                <ChallengeBoxDiv>
                                    <ChallengeBox />
                                </ChallengeBoxDiv>
                            </ItemsBox>
                            <Head>
                                <title>Início | move.it</title>
                            </Head>
                        </div>
                    </CountdownProvider>
                </ChallengesProvider>
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession({ ctx })
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies
    if (!session?.user) {
        return {
            redirect: {
                destination: `/`,
                permanent: false,
            },
        }
    } else {
        return {
            props: {
                session,
                level: Number(level),
                currentExperience: Number(currentExperience),
                challengesCompleted: Number(challengesCompleted),
            },
        }
    }
}
