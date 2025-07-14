import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">문의하기</h1>
          <p className="text-xl text-gray-600">궁금한 점이 있으시면 언제든 연락주세요</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="font-semibold">이메일</p>
                  <p className="text-gray-600">support@holyai.studio</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  💬
                </div>
                <div>
                  <p className="font-semibold">카카오톡</p>
                  <p className="text-gray-600">@holyai.studio</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  🕒
                </div>
                <div>
                  <p className="font-semibold">운영시간</p>
                  <p className="text-gray-600">평일 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">문의 폼</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이름
                </label>
                <Input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <Input type="email" placeholder="이메일을 입력하세요" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>기능 문의</option>
                  <option>가격 문의</option>
                  <option>기술 지원</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용
                </label>
                <Textarea 
                  placeholder="문의하실 내용을 자세히 작성해주세요"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 