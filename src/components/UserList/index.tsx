import React from 'react'
import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string
    isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Samuel Cupertino" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Amigo" isBot/>
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
            <UserRow nickname="Amigo" />
        </Container>
    )
}

export default UserList