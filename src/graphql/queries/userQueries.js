import {gql} from '@apollo/client'

export const LOGIN_USER= gql`
query($email: String!, $password: String!){
login(email: $email, pasaword: $password){
    id
    name
    email
    phoneNo
    achievements
    bio
    profilePicture
    StartUp
    refreshToken
    accessTokenExp
    accessToken
    investments
    portfolio
    isInvestor
    isBlocked
    }
}
`

export const GET_USER= gql`
query($id: ID!){
    getUser(id: $id){
    id
    name
    email
    phoneNo
    achievements
    bio
    profilePicture
    StartUp
    refreshToken
    accessTokenExp
    accessToken
    investments
    portfolio
    isInvestor
    isBlocked
    }
}
`

export const GET_ALL_USER=gql`
    query{
        getAllUser(){
            name
            email
            phoneNo
            bio
            profilePicture
            isInvestor
        }
    }
`

export const getAllInvestors= gql`
    query{
        getAllInvestors{
            name
            email
            phoneNo
            bio
            profilePicture
        }
    }
` 
