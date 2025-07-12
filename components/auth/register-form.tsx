"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { registerSchema, type RegisterInput } from '@/lib/validations'
import { Eye, EyeOff, Loader2, Mail, Lock, User, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema)
  })

  const password = watch('password')

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name
        })
      })

      const result = await response.json()

      if (!response.ok) {
        setError('root', {
          message: result.error || '회원가입 중 오류가 발생했습니다.'
        })
      } else {
        // 성공 시 로그인 페이지로 리다이렉트
        router.push('/login?message=registration-success')
      }
    } catch (error) {
      setError('root', {
        message: '회원가입 중 오류가 발생했습니다.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Holy AI Studio
          </CardTitle>
          <CardDescription className="text-lg">
            베타 테스트 참여하기 (20명 한정)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                이름
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="홍길동"
                  className="pl-10"
                  {...register('name')}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                이메일
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                비밀번호 확인
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* 비밀번호 강도 표시 */}
            {password && (
              <div className="space-y-2">
                <div className="text-xs text-gray-600">비밀번호 요구사항:</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-3 w-3 ${password.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className={`text-xs ${password.length >= 8 ? 'text-green-600' : 'text-gray-500'}`}>
                      8자 이상
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-3 w-3 ${/[A-Z]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className={`text-xs ${/[A-Z]/.test(password) ? 'text-green-600' : 'text-gray-500'}`}>
                      대문자 포함
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-3 w-3 ${/[a-z]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className={`text-xs ${/[a-z]/.test(password) ? 'text-green-600' : 'text-gray-500'}`}>
                      소문자 포함
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-3 w-3 ${/\d/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className={`text-xs ${/\d/.test(password) ? 'text-green-600' : 'text-gray-500'}`}>
                      숫자 포함
                    </span>
                  </div>
                </div>
              </div>
            )}

            {errors.root && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{errors.root.message}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  가입 중...
                </>
              ) : (
                '무료로 시작하기'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{' '}
              <Link
                href="/login"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                로그인
              </Link>
            </p>
          </div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-xs text-blue-700 text-center">
              🎉 가입 시 200 크레딧 무료 제공!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
