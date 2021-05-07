import React, { useContext, useState } from 'react'
import { BiHomeAlt, BiAward } from 'react-icons/bi'
import { Container, SideButton } from './styles'
import Link from 'next/link'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { useRouter } from 'next/router'
import { SideBarContext } from '../../contexts/SideBarContext'
const SideBar: React.FC = () => {
    const route = useRouter()
    const { whichIsActive, handleClickButtons } = useContext(SideBarContext)

    return (
        <Container>
            <img src="Logo.png" />
            <div>
                <SideButton
                    onClick={() => {
                        handleClickButtons('home')
                        route.push('/dashboard')
                    }}
                    isActive={whichIsActive === 'home'}
                >
                    <BiHomeAlt size={30} />
                </SideButton>
                <SideButton
                    onClick={() => {
                        handleClickButtons('award')
                        route.push('/leaderboard')
                    }}
                    isActive={whichIsActive === 'award'}
                >
                    <BiAward size={30} />
                </SideButton>
            </div>
        </Container>
    )
}

export default SideBar
