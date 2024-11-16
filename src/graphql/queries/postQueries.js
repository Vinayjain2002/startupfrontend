import {gql} from '@apollo/client'

export const GET_ALL_POSTS= gql`{
    query($pageNo: Int!){
        getAllPosts(pageNo: $pageNo){
            title
            content
            imagesURL
            createdBy{
                name
                email
                profilePicture
                bio
            }
            date
            likes{
                id
                name
                email
                profilePicture
            }
            comments{
                userId{
                    name
                    email
                    profilePicture
                }
                comment
                date
            }
        }
    }
}`

export const USER_SPECIFIC_POST = gql`{
    query($userId: ID!){
        userSpecificPosts(userId: $userId){
            title
            content
            imageUrl
            createdBy{
                name
                bio
                email
                profilePicture
            }
             date
            likes{
                id
                name
                email
                profilePicture
            }
            comments{
                userId{
                    name
                    email
                    profilePicture
                }
                comment
                date
            }
        }
    }
}
`

export const START_UP_POSTS = gql`{
    query($startUpId: ID!){
        startUpPosts(startUpId: $startUpId){
            title
            content
            imageUrl
            createdBy{
                name
                bio
                email
                profilePicture
            }
             date
            likes{
                id
                name
                email
                profilePicture
            }
            comments{
                userId{
                    name
                    email
                    profilePicture
                }
                comment
                date
            }
        }
    }
}
`

export const GET_PARTICULAR_POST= gql`
    query($postId: ID!){
        getParticularPost(postId: $postId){
            title
            content
            imageUrl
            createdBy{
                name
                bio
                email
                profilePicture
            }   
            startUpId{
                startUpName
                industry
                location
                description
                logo
            }
             likes{
                id
                name
                email
                profilePicture
            }
            comments{
                userId{
                    name
                    email
                    profilePicture
                }
                comment
                date
            }
            
        }
    }
`   