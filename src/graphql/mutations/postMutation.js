import gql from '@apollo/client'

export const CREATE_POST= gql`{
    mutation(){
        createPost(){
        
        }
    }
}`

export const EDIT_POST= gql`{
    mutation(){
        editPost(){
        
        }
    }
}`

export const DELETE_POST= gql`{
    mutation(){
        deletePost(){
        
        }
    }
}`