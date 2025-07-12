import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      isAdmin: boolean
      credits: number
      plan: string
    }
  }

  interface User {
    id: string
    name: string
    email: string
    isAdmin: boolean
    credits: number
    plan: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean
    credits: number
    plan: string
  }
} 