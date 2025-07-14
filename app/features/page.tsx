export default function FeaturesPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">기능소개</h1>
          <p className="text-xl text-gray-600">Holy AI Studio의 강력한 기능들을 소개합니다</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">AI 콘텐츠 생성</h3>
            <p className="text-gray-600">GPT-4 기반 고품질 콘텐츠 자동 생성</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">플랫폼 최적화</h3>
            <p className="text-gray-600">각 플랫폼별 특성에 맞는 콘텐츠 최적화</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">자동 업로드</h3>
            <p className="text-gray-600">생성된 콘텐츠 자동 업로드 (준비 중)</p>
          </div>
        </div>
      </div>
    </div>
  )
} 