import { Entity, PrimaryKey, Property } from "@mikro-orm/core"

@Entity()
class User {
  @PrimaryKey()
  id!: number

  @Property({ type: "text" })
  name!: string

  @Property({ type: "text" })
  email!: string

  @Property({ type: "date" })
  createdAt = new Date()

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date()
}

export default User