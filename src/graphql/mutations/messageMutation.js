import {gql} from '@apollo/client'

export const SEND_MESSAGE= gql`
    mutation($chatId: ID!){
        sendMessage(chatId: $chatId){
            sender{
                name
                profilePicture
                email
                bio
                phoneNo
                isInvestor
            }
            message
            chatId{ 
                photo
                chatName
                isGroup
                users{
                    name
                    profilePicture
                    email
                    bio
                    phoneNo
                    isInvestor
                }
                latestMessage{
                    sender{
                        name
                        profilePicture
                        email
                        bio
                        phoneNo
                        isInvestor
                    }
                    message
                }  
            }
        }
    }
`