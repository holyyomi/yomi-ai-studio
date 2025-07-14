export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">가격정책</h1>
          <p className="text-xl text-gray-600">합리적인 가격으로 시작하세요</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
            <h3 className="text-2xl font-bold mb-4">무료</h3>
            <div className="text-4xl font-bold mb-4">₩0</div>
            <p className="text-gray-600 mb-6">200 크레딧 제공</p>
            <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg">
              현재 플랜
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-500 text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Pro</h3>
            <div className="text-4xl font-bold mb-4">₩299,000</div>
            <p className="text-gray-600 mb-6">1,000 크레딧/월</p>
            <button className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              시작하기
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
            <h3 className="text-2xl font-bold mb-4">VIP</h3>
            <div className="text-4xl font-bold mb-4">₩999,000</div>
            <p className="text-gray-600 mb-6">5,000 크레딧/월</p>
            <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg">
              시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 