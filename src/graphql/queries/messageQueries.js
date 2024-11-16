import {gql} from '@apollo/client'

export const getMessages=gql`{
    query($chatId: ID!){
        getMessages(chatId: $chatId){
            sender{
                name
                email
                profilePicture
                bio
            }
            message
            chatId{
                photo
                chatName
                isGroup
                users{
                    name
                    email
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
                    email
                    profilePicture
                    bio
                }
            }
        }
    }
}`