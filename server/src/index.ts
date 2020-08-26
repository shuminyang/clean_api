import { MikroORM } from "@mikro-orm/core"
import microConfig from "./mikro-orm.config"
import express from "express"
import config from "./config"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import UserResolver from "./resolvers/Users"

const main = async () => {
  const orm = await MikroORM.init(microConfig)
  await orm.getMigrator().up()

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      validate: false,
      resolvers: [UserResolver]
    })
  })

  apolloServer.applyMiddleware({ app })

  app.get("/health-check", (_, res) => {
    res.sendStatus(200)
  })

  app.listen(config.port, () => console.log(`server is running on port ${config.port}`))
}

main()