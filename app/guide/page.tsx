export default function GuidePage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">이용가이드</h1>
          <p className="text-xl text-gray-600">Holy AI Studio 사용법을 단계별로 안내합니다</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl mb-4">1️⃣</div>
            <h3 className="text-xl font-semibold mb-4">주제 입력</h3>
            <p className="text-gray-600">생성하고 싶은 콘텐츠의 주제나 키워드를 입력하세요</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl mb-4">2️⃣</div>
            <h3 className="text-xl font-semibold mb-4">플랫폼 선택</h3>
            <p className="text-gray-600">콘텐츠를 업로드할 플랫폼들을 선택하세요</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl mb-4">3️⃣</div>
            <h3 className="text-xl font-semibold mb-4">AI 생성</h3>
            <p className="text-gray-600">AI가 각 플랫폼에 최적화된 콘텐츠를 생성합니다</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl mb-4">4️⃣</div>
            <h3 className="text-xl font-semibold mb-4">콘텐츠 확인</h3>
            <p className="text-gray-600">생성된 콘텐츠를 미리보기하고 수정하세요</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl mb-4">5️⃣</div>
            <h3 className="text-xl font-semibold mb-4">업로드</h3>
            <p className="text-gray-600">최종 확인 후 각 플랫폼에 자동 업로드됩니다</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold mb-4">완료!</h3>
            <p className="text-gray-600">11개 플랫폼에 최적화된 콘텐츠가 완성되었습니다</p>
          </div>
        </div>
      </div>
    </div>
  )
} 