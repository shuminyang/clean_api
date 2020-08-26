import { Resolver, Query, Ctx, Arg, Int, Mutation } from "type-graphql"
import User from "../entities/User"
import { ResolverContext } from "../types"

@Resolver()
class UserResolver {

  @Query(() => [User])
  getUsers(@Ctx() { em }: ResolverContext) {
    return em.find(User, {})
  }

  @Query(() => User, { nullable: true })
  getUser(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: ResolverContext
  ) {
    return em.findOne(User, { id })
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name", () => String) name: string,
    @Arg("email", () => String) email: string,
    @Ctx() { em }: ResolverContext
  ) {
    const user = em.create(User, { name, email })
    await em.persistAndFlush(user)

    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("name", () => String) name: string,
    @Arg("email", () => String) email: string,
    @Ctx() { em }: ResolverContext
  ) {
    const user = await em.findOne(User, { email })

    if (!user) {
      return null
    }

    user.name = name
    user.email = email

    await em.persistAndFlush(user)

    return user
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("email", () => String) email: string,
    @Ctx() { em }: ResolverContext
  ) {
    await em.nativeDelete(User, { email })
    return true
  }


}

export default UserResolver