import {gql} from '@apollo/client'

export const CREATE_GROUP= gql`{
    mutation($chatName: String!, $users: [ID!] ){
        createGroup(chatName: $chatName, users: $users){
        
        }
    }
}`

export const RENAME_GROUP= gql`{
    mutation($chatId: ID!, chatName: String!){
        renameGroup(chatId: $chatId, chatName: $chatName){
        
        }
    }
}`

export const ADD_TO_GROUP = gql`{
    mutation($userId: ID!, $chatId: ID!){
        addToGroup(){
        
        }
    }
}`

export const REMOVE_FROM_GROUP= gql`{
    mutation($chatId: ID!, #userId: ID! ){
        removeFromGroup(chatId: $chatId, userId: $userId){
            
        }
    }
}`

