//DB Conection (Import)
const mongoose = require('mongoose');
require('dotenv').config({ path: ".env"})
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolver')


mongoose.connect(
  process.env.DB_CONECTION, 
  { useNewUrlParser: true,
    useUnifiedTopology: true },
  () => console.log('connect to DB!')
)

const serverApollo = new ApolloServer({
  typeDefs,
  resolvers
});

//conect to DB (Instance) 

serverApollo.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});