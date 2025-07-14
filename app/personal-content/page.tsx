export default function PersonalContentPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">개인콘텐츠</h1>
          <p className="text-xl text-gray-600">개인 브랜딩을 위한 AI 콘텐츠 생성</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">개인 브랜딩</h3>
            <p className="text-gray-600">나만의 개성 있는 콘텐츠로 브랜드 구축</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">소셜미디어</h3>
            <p className="text-gray-600">각 플랫폼에 최적화된 개인 콘텐츠</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">자동화</h3>
            <p className="text-gray-600">일관된 개인 브랜딩 자동 관리</p>
          </div>
        </div>
      </div>
    </div>
  )
} 