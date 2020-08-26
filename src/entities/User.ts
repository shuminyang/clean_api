import { Entity, PrimaryKey, Property } from "@mikro-orm/core"
import { ObjectType, Field } from "type-graphql"

@ObjectType()
@Entity()
class User {

  @Field()
  @PrimaryKey()
  id!: number

  @Field()
  @Property({ type: "text" })
  name!: string

  @Field()
  @Property({ type: "text" })
  email!: string

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date()

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date()
}

export default User