import express  from "express";
import resolvers from "./resolver";
import schema from "./schema";
import  { graphqlHTTP } from 'express-graphql';

const app  = express();


app.get("/",(req,res)=>{
    res.send("Up and running with graphql crash course");
});

const root = resolvers;

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));
app.listen(8082,()=> console.log("Running at 8082"));