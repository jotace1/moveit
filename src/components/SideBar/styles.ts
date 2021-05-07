import styled, { StyledProps } from 'styled-components'

interface Props {
    isActive: boolean
}

export const Container = styled.div`
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 112px;

    > img {
        padding: 30px;
    }

    div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

export const SideButton = styled.button<Props>`
    background: transparent;
    border: none;
    width: 100%;
    height: 56px;
    border-left: ${(props) =>
        props.isActive ? `3px solid #5965e0` : '#666666'};

    svg {
        color: ${(props) => (props.isActive ? `#5965e0` : '#666666')};
    }
`
