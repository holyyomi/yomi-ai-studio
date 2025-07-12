import { User } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      isAdmin: boolean
      credits: number
      plan: string
    }
  }

  interface User {
    id: string
    email: string
    name: string
    isAdmin: boolean
    credits: number
    plan: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin: boolean
    credits: number
    plan: string
  }
}

export interface AuthUser extends User {
  apiKeys?: any[]
  contents?: any[]
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  name: string
}
