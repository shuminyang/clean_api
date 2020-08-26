import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core"

export type ResolverContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}