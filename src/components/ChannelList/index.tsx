import React from 'react'
import { Container, Category, AddCategoryIcon} from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canal de Texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="regex" />
            <ChannelButton channelName="nodejs" />
            <ChannelButton channelName="react" />
            <ChannelButton channelName="typescript" />
            <ChannelButton channelName="mysql" />
            <ChannelButton channelName="mongodb" />
            <ChannelButton channelName="javascript" />
            <ChannelButton channelName="css" />
            <ChannelButton channelName="html" />
        </Container>
    )
}

export default ChannelList