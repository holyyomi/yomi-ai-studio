// 배포 환경 호환 사용자 관리 시스템
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

// 브라우저 환경 체크
function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

// 안전한 localStorage 접근
function getStoredUsers(): User[] {
  if (!isBrowser()) return defaultUsers
  
  try {
    const storedUsers = localStorage.getItem(USERS_KEY)
    if (!storedUsers) {
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers))
      return defaultUsers
    }
    
    const users = JSON.parse(storedUsers)
    
    // 관리자 계정 확인 및 추가
    const adminExists = users.find((user: User) => user.email === "a01041001637@gmail.com")
    if (!adminExists) {
      users.push(defaultUsers[0])
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
    }
    
    return users
  } catch (error) {
    console.error('localStorage 접근 오류:', error)
    return defaultUsers
  }
}

// 안전한 localStorage 저장
function saveUsers(users: User[]): void {
  if (!isBrowser()) return
  
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
  } catch (error) {
    console.error('localStorage 저장 오류:', error)
  }
}

export function getAllUsers(): User[] {
  return getStoredUsers()
}

export function findUserByEmail(email: string): User | null {
  const users = getStoredUsers()
  return users.find(user => user.email === email) || null
}

export function createUser(userData: {
  name: string
  email: string
  password: string
}): User {
  if (!isBrowser()) {
    throw new Error("브라우저 환경에서만 사용 가능합니다.")
  }
  
  const users = getStoredUsers()
  
  const existingUser = users.find(user => user.email === userData.email)
  if (existingUser) {
    throw new Error("이미 존재하는 이메일입니다.")
  }

  const newUser: User = {
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
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
  if (!isBrowser()) return null
  
  const users = getStoredUsers()
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
  if (!isBrowser()) return null
  
  const users = getStoredUsers()
  const userIndex = users.findIndex(user => user.id === userId)
  
  if (userIndex === -1) return null
  
  users[userIndex] = { ...users[userIndex], ...updates }
  saveUsers(users)
  return users[userIndex]
}

export function deleteUser(userId: string): boolean {
  if (!isBrowser()) return false
  
  const users = getStoredUsers()
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
  const users = getStoredUsers()
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