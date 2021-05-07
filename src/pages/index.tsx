import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import {
    Container,
    GithubContainer,
    GithubText,
    LoginBox,
    StyledButton,
    StyledInput,
    StyledInputBox,
    WellcomeText,
} from '../styles/homestyle'
interface HomeProps {
    level: number
    currentExperience: number
    challengesCompleted: number
}

export default function Home(props: HomeProps) {
    const [session] = useSession()
    const [inputValue, setInputValue] = useState('')
    const router = useRouter()
    if (session?.user) {
        router.push('/dashboard')
    }
    return (
        <Container>
            <img src="icon-full.svg" />
            <LoginBox>
                <img src="logo-full-white.svg" alt="Moveit" />
                <WellcomeText>Bem-vindo</WellcomeText>
                <GithubContainer>
                    <img src="icons/git.svg" />
                    <GithubText>
                        Faça login com seu Github para começar
                    </GithubText>
                </GithubContainer>

                <StyledInputBox>
                    <StyledButton
                        onClick={() => {
                            signIn('github')
                        }}
                    >
                        <strong>Entrar</strong>
                        <img src="icons/arrow-right.svg" />
                    </StyledButton>
                </StyledInputBox>
            </LoginBox>
        </Container>
    )
}
