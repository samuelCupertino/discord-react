import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    color: var(--senary);
    transition: background-color 0.2s;

    > div {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    > div.actions {
        display: none;        
    }

    &:hover, &.active {
        background-color: var(--quinary);
        color: var(--white);

        > div.actions {
            display: flex;
        }
    }
`

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .25s;

    &:hover {
        color: var(--white);
    }
`

export const SettingsIcon = styled(Settings)`
    width: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .25s;

    &:hover {
        color: var(--white);
    }
` 