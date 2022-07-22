import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

async function startServer() {
    const server = new ApolloServer({
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        typeDefs,
        resolvers,
    });

    await server.start();

    server.applyMiddleware({
        app,
        cors: {
            origin: `http://${HOSTNAME}:3000`
        },
        bodyParserConfig: true,
    });
};

startServer(app);
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening at ${HOSTNAME}:${PORT}.`);
});