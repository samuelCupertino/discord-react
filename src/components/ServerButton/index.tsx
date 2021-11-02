import React from 'react'
import { Button } from './styles'

export interface Props {
    selected?: boolean,
    isHome?: boolean,
    hasNotifications ?: boolean,
    mentions?: number
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => (
    <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
    >
        {isHome && <img src="https://icon-library.com/images/discord-logo-icon/discord-logo-icon-4.jpg" alt="logo" />}
    </Button>
)

export default ServerButton