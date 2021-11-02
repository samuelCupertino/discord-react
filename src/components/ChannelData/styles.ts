import styled from 'styled-components'
import { AlternateEmail } from '@styled-icons/material'

export const Container = styled.div`
    grid-area: CD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--primary);
`

export const Messages = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 60px);
    overflow-y: scroll; 

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`

export const InputWrapper = styled.div`
    height: 60px;
    width: 100%;
    padding: 10px 15px;
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px 10px 10px 60px;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--chat-input);

    &::placeholder {
        color: var(--gray);
    }
`

export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    position: absolute;
    left: 20px;
    top: calc(50% - 12px);
`
