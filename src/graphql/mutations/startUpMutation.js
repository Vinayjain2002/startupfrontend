import gql from '@apollo/client'

export const CREATE_START_UP_PAGE= gql`{
    mutation(){
        createStartUpPage(){
        
        }
    }
}`

export const UPDATE_STARTUP_PAGE=gql`{
    mutation(){
        updateStartUpPage(){
        
        }
    }
}`


export const DELETE_STARTUP_PAGE= gql`{
    mutation(){
        deleteStartUpPage(){
        
        }
    }
}`