import styled from 'styled-components'
import { Mic, Headset, Settings } from 'styled-icons/material'


export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--gray);
`

export const UserData = styled.div`
    > strong {
        display: block;
        font-size: 13px;
        color: var(--white);
    }

    > span {
        display: block;
        font-size: 12px;
        color: var(--gray);
    }
`

export const Icons = styled.div`
    display: flex;
    gap: 5px;

    > svg {
        width: 20px;
        height: 20px;
        color: var(--white);
        opacity: 0.7;
        cursor: pointer;
        transition: opacity .25s;

        &:hover {
            opacity: 1;
        }
    }
`

export const MicIcon = styled(Mic)``

export const HeadphoneIcon = styled(Headset)``

export const SettingsIcon = styled(Settings)``