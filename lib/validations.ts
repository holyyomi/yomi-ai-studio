import { z } from 'zod'

// 인증 관련 스키마
export const loginSchema = z.object({
  email: z.string().email('올바른 이메일을 입력해주세요'),
  password: z.string().min(1, '비밀번호를 입력해주세요')
})

export const registerSchema = z.object({
  email: z.string().email('올바른 이메일을 입력해주세요'),
  password: z.string()
    .min(8, '비밀번호는 8자 이상이어야 합니다')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, '비밀번호는 대문자, 소문자, 숫자를 포함해야 합니다'),
  name: z.string().min(2, '이름은 2자 이상이어야 합니다'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다',
  path: ['confirmPassword']
})

// 콘텐츠 생성 스키마
export const contentSchema = z.object({
  type: z.enum(['PERSONAL', 'PRODUCT']),
  title: z.string().min(1, '제목을 입력해주세요'),
  inputData: z.object({
    topic: z.string().optional(),
    persona: z.string().optional(),
    audience: z.string().optional(),
    productName: z.string().optional(),
    productUrl: z.string().url().optional(),
    features: z.string().optional(),
    price: z.string().optional(),
    target: z.string().optional()
  }),
  platforms: z.array(z.string()).min(1, '최소 하나의 플랫폼을 선택해주세요')
})

// API 키 스키마
export const apiKeySchema = z.object({
  platform: z.string(),
  keyData: z.string().min(1, 'API 키를 입력해주세요')
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type ContentInput = z.infer<typeof contentSchema>
export type ApiKeyInput = z.infer<typeof apiKeySchema>
