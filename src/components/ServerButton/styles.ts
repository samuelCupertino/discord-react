import styled from 'styled-components'

import { Props } from '.'

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    transition: border-radius .25s, background-color .25s;

    &::before {
        display: ${(props) => props.hasNotifications ? 'block' : 'none'};
        content: '';
        width: 9px;
        height: 9px;
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);
        background-color: var(--white);
        border-radius: 50%;
    }
    
    &::after {
        content: '${props => props.mentions}';
        display: ${props => props.mentions ? 'block' : 'none'};
        background-color: var(--notification);
        width: auto;
        height: 16px;
        padding: 0 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;
        border-radius: 12px;
        border: 4px solid var(--quaternary);
        font-size: 13px;
        font-weight: bold;
        color: var(--white);
    }

    &.active, &:hover {
        border-radius: 16px;
        /* background-color: var(--${props => props.isHome ? 'rocketseat' : 'discord'}); */
        background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }

    > img {
        width: 35px;
    }
`