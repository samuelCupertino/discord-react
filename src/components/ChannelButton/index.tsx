import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string
    selected?: boolean
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => (
    <Container className={selected ? 'active' : ''}>
        <div>
            <HashtagIcon />
            <span>{channelName}</span>
        </div>
        <div className="actions">
            <InviteIcon />
            <SettingsIcon />
        </div>
    </Container>
)


export default ChannelButton