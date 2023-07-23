const gql = require('graphql-tag');

// template type
/* 
    String here is a gql scalar
    ! marks the field to be required

    at minimum, schema needs a query - mutation is optional
 */
/* 
    query

    me must return the type User
*/
const typeDefs = gql`
    type User {
        email: String!
        avatar: String
        friends: [User]
    }

    type Query {
        me: User!
    }
`

/* 
    need to name the same as type def
*/
const resolvers = {
    Query: {
        me() {
            return {
                email: "www",
                avatar: "www",
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(() => {
    console.log("localhost 4000")
})

/* 
node dependency not setup yet

- gql playground
*/