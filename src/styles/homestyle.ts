import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--blue);
`

export const LoginBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const WellcomeText = styled.h3`
    margin: 100px 0 20px 0;
    font-size: 40px;
    color: #fff;
`

export const GithubContainer = styled.div`
    display: flex;
`

export const GithubText = styled.p`
    color: var(--text-highlight);
    margin-left: 20px;
    font-size: 25px;
    max-width: 20rem;
`

export const StyledInputBox = styled.div`
    margin-top: 50px;
    display: flex;
`

export const StyledInput = styled.input`
    color: var(--white);
    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
    border: none;
    height: 60px;
    padding: 10px;
    border-radius: 5px 0 0 5px;

    &::placeholder {
        color: var(--text-highlight);
    }
`

export const StyledButton = styled.button`
    border: none;
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    background-color: var(--green);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 30px;
    }
`
