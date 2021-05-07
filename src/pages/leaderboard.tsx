import Head from 'next/head'
import React from 'react'
import SideBar from '../components/SideBar'
import { Container, ItemsBox } from '../styles/leaderboardstyle'
import { FaLaptopCode } from 'react-icons/fa'
const Leaderboard: React.FC = () => {
    return (
        <>
            <Container>
                <SideBar />

                <ItemsBox>
                    <h1>In development</h1>
                    <FaLaptopCode size={100} />
                </ItemsBox>
                <Head>
                    <title>Leaderboard | move.it</title>
                </Head>
            </Container>
        </>
    )
}

export default Leaderboard
