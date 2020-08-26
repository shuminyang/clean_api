import { MikroORM } from "@mikro-orm/core"
import microConfig from "./mikro-orm.config"

const main = async () => {
  const orm = await MikroORM.init(microConfig)
  orm.getMigrator().up()

  // const user = orm.em.create(User, { name: "hello" })
  // await orm.em.persistAndFlush(user)

  

}

main()