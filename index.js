const { ApolloServer } = require("apollo-server");
const  mongoose = require("mongoose");

const MONGODB = "mongodb+srv://palrishikesh07:bdyZhyfLQn3FlwBM@cluster0.19lvosa.mongodb.net/?retryWrites=true&w=majority";

// Apollo Server
// typeDefs: GraphQL type Defination
// resolvers: How do we resolve queries / mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers  = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB,{useNewUrlParser: true})
.then(()=>{
    console.log("MongoDB Connection Successfully");
    return server.listen({port:5000});
})
.then((res)=>{
    console.log(`Server running at ${res.url}`);
})

// https://www.youtube.com/watch?v=uPxo9NQLVMI&t=1299s