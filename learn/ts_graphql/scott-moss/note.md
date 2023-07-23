

## Tools

- nodejs for runtime
- mongodb for db 
  - can be anytype of db 
  - doesnt need a db, plain js is also fine

## What is GraphQL
> strongly typed query language and runtime for your data
- let the user query for the exact set of data required
  - with REST, youd need to all the endpoint and filter through the returned data
- strongly typed like ts for your data
- excellent dev tooling and experiences

- can sit in front of any existing api because its **a Query language**

## GQL v REST
essentially
REST is a different type of interface to build an API
GQL is a query language

> different but VERY similar

- GQL only has 1 url, doesnt need resource url+verb combo
- most request are POST request where you post the query to retrieve specified data
- Response body 
  - in REST - the data resource is determined by the server
    - multiple calls is needed to retrieve relational data
    - a request might execute a single controller on the server
  - in GQL - its determined by the query
    - can start with entry resource and traverse all the connections in one request
    - a request execute many resolvers on the server


### GQL in the server
- Type definitions
- Resolvers - similar to controllers, - function that fetch data
- Query definition
- Mutation definitions
- Composition (adv) - composing many API together under 1gql umbrella
- Schema 

### Client side
- queries - retrieve data
- mutation - mutating data store
- fragments - little piece of shared mutations

### Where does GQL fit in
> Greenfield?

- GQL server with a connected DB (most greenfield)
- GQL server as a layer in front of many 3rd party service and connects them all with 1 GQL api
- Hybrid approach wher GQL server has a connected DB and also communicates with 3rd party services


### Node GQL tooling
- Servers - apollo servers, GQL yoga
- Services 
  - aws Amplify
- Tools - prisma

---

## GQL Schema
- Written in SchemaDefinitionLanguage (SDL)
- schema can be written programmatically
  - using language constructs, - this is how its used to be written in js

### SChema basics
- Types - defining shape of field
- Fields - keys on tha type that has name: value type
- Scalars - primitive value built into GQL
- Query - determine how client can access data
- Mutation - defines how clients can modify queries