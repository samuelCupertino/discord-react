import React from 'react'
import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string
    isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => (
    <User>
        <Avatar className={isBot ? 'bot' : ''} />
        <strong>{nickname}</strong>
        { isBot && <span>Bot</span> }
    </User>
)

const UserList: React.FC = () => (
    <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Samuel Cupertino" />

        <Role>Offline - 20</Role>
        <UserRow nickname="Amigo" isBot/>

        {
            [...Array(19)].map(()=> <UserRow nickname="Amigo" /> )
        }
    </Container>
)

export default UserList