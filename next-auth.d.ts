import { User } from "@prisma/client"
import type { User } from "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: User
  }
}
