import React, { useRef, useEffect} from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if(div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef])

    return (
        <Container>
            
            <Messages>
                {[...Array(16)].map(() => (
                        <ChannelMessage 
                            author="Samuel Cupertino"
                            date="02/11/2021"
                            content="Olá, mundo!"
                        />
                ))}
                <ChannelMessage 
                    author="Eu Robô"
                    date="02/11/2021"
                    content={
                        <>
                            <Mention>@Samuel</Mention>, beleza?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conersar em chate-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData