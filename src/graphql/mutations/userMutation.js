import {gql} from '@apollo/client'


export const REGISTER_USER = gql`
    mutation ($name: String!, $email: String!, $phoneNo: String!, $isInvestor: Boolean!) {
        createUser(name: $name, email: $email, phoneNo: $phoneNo, isInvestor: $isInvestor) {
            id
            name
            email
            phoneNo
            isInvestor
            accessToken
            refreshToken
        }
    }
`;

export const GENERATE_TOKEN= gql`{
    mutation($refreshToken: String!){
        generateToken(refreshToken: $refreshToken){
            name
            email
            phoneNo
            achievements
            bio
            profilePicture
            startUp{
                role
                startUpName
                startUpId{
                    startUpName
                    industry
                    location
                    description
                    logo
                }
            }
            accessToken
            refreshToken
            investments{
                startUpId{
                    startUpName
                    industry
                    location
                    description
                    logo
                }
                investmentAmount
                date
            }
            portfolio{
                startUpId{
                    startUpName
                    industry
                    location
                    description
                    logo
                }
                percentageOwnership
            }
            isInvestor
            isBlocked
        }
    }
}`


export const UPDATE_PROFILE= gql`{
    mutation(
        $id: ID!,
        $name: String!,
        $phoneNo: Int!,
        $achievements: JSON!,
        $bio: String!,
        $profilePicture: String!,
        $StartUp: JSON,
        $isInvestor: Boolean!,
        $portfolio: [JSON],
        $investments: [JSON]
    ){
        updateProfile(id: $id, name: $name
             phoneNo: $phoneNo,
            achievements: $achievements,
            bio: $bio,
            profilePicture: $profilePicture,
            StartUp: $StartUp,
            isInvestor: $isInvestor,
            portfolio: $portfolio,
            investments: $investments,
        ){
            name
            email
            phoneNo
            achievements{
                title
                description
                date
            }      
            bio
            profilePicture
            StartUp{
                role
                startUpName
                startUpId{
                    startUpName
                    industry
                    location
                    description
                    logo
                }
            }
            refreshToken
            accessToken
            accessTokenExp
            investments{
                startUpId{
                     startUpName
                    industry
                    location
                    description
                    logo
                }
                investmentAmount
                date
            }
            portfolio{
                startUpId{
                    startUpName
                    industry
                    location
                    description
                    logo
                }
                percentageOwnership
            }
            isInvestor
            isBlocked
        } 
    }
}`

export const DELETE_ACCOUNT= gql`{
    mutation($id: ID!){
        deleteAccount(id: $id){
            name
            email
            phoneNo
        }
    }
}`

export const BLOCK_USER= gql`{
    mutation($id: ID!){
        blockUser(id: $id){
            name
            email
            isBlocked
        }
    }
}`