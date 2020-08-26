import config from "./config"
import User from "./entities/User"
import { MikroORM } from "@mikro-orm/core"
import path from "path"

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [User],
  dbName: config.dbName,
  type: "postgresql",
  debug: !config.__prod__,
  password: "asdqwe123"
} as Parameters<typeof MikroORM.init>[0]