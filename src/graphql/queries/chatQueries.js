import {gql} from '@apollo/client'

export const ACCESS_CHAT= gql`{
    query($userId: ID!){
        accessChat(userId: $userId){
            photo
            chatName
            isGroup
            users{
                name
                profilePicture
                bio
            }
            latestMessage{
                sender{
                    name
                    email
                    profilePicture
                }
                message
            }
            groupAdmin{
                name
                profilePicture
                bio
                email
            }
        }
    }
}`


export const FETCH_ALL_CHATS = gql`{
    query{
        fetchAllChats{
            photo
            chatName
            isGroup
            users{
                name
                profilePicture
                bio
                email
            }
            latestMessage{
                sender{
                    name
                    email
                    profilePicture
                }
                message
            }
            groupAdmin{
                name
                email
                profilePicture
                bio
            }
        }
    }
}`