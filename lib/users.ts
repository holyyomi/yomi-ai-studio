// 브라우저 로컬스토리지 기반 사용자 관리 시스템 (배포용)
export interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
  credits: number
  plan: 'FREE' | 'PRO' | 'PREMIUM' | 'VIP'
  createdAt: string
  lastLogin?: string
}

// 기본 사용자 데이터
const defaultUsers: User[] = [
  {
    id: "admin-001",
    name: "관리자",
    email: "a01041001637@gmail.com",
    password: "admin123!",
    role: "admin",
    credits: 999999,
    plan: "VIP",
    createdAt: new Date().toISOString()
  },
  {
    id: "test-001",
    name: "테스트 사용자",
    email: "test@test.com",
    password: "test123",
    role: "user",
    credits: 200,
    plan: "FREE",
    createdAt: new Date().toISOString()
  }
]

const USERS_KEY = "holy_ai_studio_users"

function initializeUsers() {
  if (typeof window === 'undefined') return defaultUsers
  
  const storedUsers = localStorage.getItem(USERS_KEY)
  if (!storedUsers) {
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers))
    return defaultUsers
  }
  
  return JSON.parse(storedUsers)
}

function saveUsers(users: User[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getAllUsers(): User[] {
  return initializeUsers()
}

export function findUserByEmail(email: string): User | null {
  const users = getAllUsers()
  return users.find(user => user.email === email) || null
}

export function createUser(userData: {
  name: string
  email: string
  password: string
}): User {
  const users = getAllUsers()
  
  const existingUser = users.find(user => user.email === userData.email)
  if (existingUser) {
    throw new Error("이미 존재하는 이메일입니다.")
  }

  const newUser: User = {
    id: `user-${Date.now()}`,
    ...userData,
    role: "user",
    credits: 200,
    plan: "FREE",
    createdAt: new Date().toISOString()
  }
  
  users.push(newUser)
  saveUsers(users)
  return newUser
}

export function validateUser(email: string, password: string): User | null {
  const users = getAllUsers()
  const user = users.find(user => user.email === email && user.password === password)
  
  if (user) {
    user.lastLogin = new Date().toISOString()
    const updatedUsers = users.map(u => u.id === user.id ? user : u)
    saveUsers(updatedUsers)
    return user
  }
  
  return null
}

export function updateUser(userId: string, updates: Partial<User>): User | null {
  const users = getAllUsers()
  const userIndex = users.findIndex(user => user.id === userId)
  
  if (userIndex === -1) return null
  
  users[userIndex] = { ...users[userIndex], ...updates }
  saveUsers(users)
  return users[userIndex]
}

export function deleteUser(userId: string): boolean {
  const users = getAllUsers()
  const filteredUsers = users.filter(user => user.id !== userId)
  
  if (filteredUsers.length === users.length) return false
  
  saveUsers(filteredUsers)
  return true
}

export function updateUserCredits(userId: string, credits: number): boolean {
  const user = updateUser(userId, { credits })
  return user !== null
}

export function updateUserPlan(userId: string, plan: User['plan']): boolean {
  const user = updateUser(userId, { plan })
  return user !== null
}

export function getUserStats() {
  const users = getAllUsers()
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  
  return {
    totalUsers: users.length,
    newUsersThisWeek: users.filter(user => 
      new Date(user.createdAt) > oneWeekAgo
    ).length,
    activeUsers: users.filter(user => 
      user.lastLogin && new Date(user.lastLogin) > oneWeekAgo
    ).length,
    planDistribution: {
      FREE: users.filter(u => u.plan === 'FREE').length,
      PRO: users.filter(u => u.plan === 'PRO').length,
      PREMIUM: users.filter(u => u.plan === 'PREMIUM').length,
      VIP: users.filter(u => u.plan === 'VIP').length,
    }
  }
} 