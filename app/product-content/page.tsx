export default function ProductContentPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">제품콘텐츠</h1>
          <p className="text-xl text-gray-600">제품 마케팅을 위한 AI 콘텐츠 생성</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">제품 소개</h3>
            <p className="text-gray-600">제품의 특징과 장점을 강조한 콘텐츠</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">마케팅 콘텐츠</h3>
            <p className="text-gray-600">판매 전환율을 높이는 마케팅 콘텐츠</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">플랫폼 최적화</h3>
            <p className="text-gray-600">각 플랫폼에 맞는 제품 콘텐츠 최적화</p>
          </div>
        </div>
      </div>
    </div>
  )
} 