"use client"

export default function HomePage() {
  return (
    <div>
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .navbar { background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100; }
        .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; height: 70px; }
        .logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .logo-icon { width: 40px; height: 40px; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; color: white; }
        .logo-text { font-size: 2rem; font-weight: 700; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nav-menu { display: flex; gap: 25px; list-style: none; }
        .nav-link { text-decoration: none; color: #666; font-weight: 500; font-size: 14px; }
        .nav-buttons { display: flex; gap: 15px; }
        .btn-login { padding: 8px 20px; color: #666; text-decoration: none; border-radius: 6px; }
        .btn-signup { padding: 8px 20px; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; }
        .hero { background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: white; padding: 100px 20px; text-align: center; }
        .hero h1 { font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; }
        .hero p { font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9; }
        .btn-hero { display: inline-block; padding: 15px 30px; background: white; color: #8b5cf6; text-decoration: none; border-radius: 8px; font-weight: 600; }
        .section { padding: 80px 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-title { font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.2rem; text-align: center; color: #666; margin-bottom: 3rem; }
        .platforms { background: #f8fafc; }
      `}</style>

      {/* 네비게이션 */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">Holy AI Studio</div>
          </a>
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">홈</a></li>
            <li><a href="/personal" className="nav-link">개인콘텐츠</a></li>
            <li><a href="/product" className="nav-link">제품콘텐츠</a></li>
            <li><a href="/thumbnail" className="nav-link">썸네일(준비중) ●</a></li>
            <li><a href="/detail" className="nav-link">상세페이지(준비중) ●</a></li>
            <li><a href="/marketing" className="nav-link">마케팅구독(준비중) ●</a></li>
            <li><a href="/features" className="nav-link">기능소개</a></li>
            <li><a href="/pricing" className="nav-link">가격정책</a></li>
            <li><a href="/guide" className="nav-link">이용가이드</a></li>
            <li><a href="/contact" className="nav-link">문의하기</a></li>
          </ul>
          <div className="nav-buttons">
            <a href="/login" className="btn-login">로그인</a>
            <a href="/register" className="btn-signup">회원가입</a>
          </div>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="hero">
        <h1>11개 플랫폼,<br />한 번에 정복하세요</h1>
        <p>하나의 주제 입력으로 11개 SNS 플랫폼에 최적화된 콘텐츠를 자동 생성하는 AI 콘텐츠 스튜디오</p>
        <a href="/register" className="btn-hero">⚡ 무료로 시작하기</a>
      </section>

      {/* 플랫폼 */}
      <section className="section platforms">
        <div className="container">
          <h2 className="section-title">지원하는 플랫폼</h2>
          <p className="section-subtitle">11개 주요 SNS 플랫폼을 모두 지원합니다</p>
          
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <div style={{display: 'inline-block', background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '3px solid #8b5cf6', position: 'relative'}}>
              <div style={{position: 'absolute', top: '-10px', right: '-10px', background: '#8b5cf6', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600'}}>메인</div>
              <div style={{fontSize: '3rem', marginBottom: '10px'}}>📝</div>
              <div style={{fontSize: '1.1rem', fontWeight: '600'}}>구글 블로그</div>
            </div>
          </div>

          <div style={{marginBottom: '40px'}}>
            <div style={{textAlign: 'center', fontWeight: '600', color: '#666', marginBottom: '20px', fontSize: '16px'}}>자동 업로드</div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>AUTO</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>🧵</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>스레드</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>AUTO</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>📷</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>인스타그램</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>AUTO</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>👥</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>페이스북</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>AUTO</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>🐦</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>트위터</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>AUTO</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>💼</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>링크드인</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>AUTO</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>📌</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>핀터레스트</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{textAlign: 'center', fontWeight: '600', color: '#666', marginBottom: '20px', fontSize: '16px'}}>수동 업로드</div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#f59e0b', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>MANUAL</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>🟢</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>네이버 블로그</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#f59e0b', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>MANUAL</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>📖</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>티스토리</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#f59e0b', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>MANUAL</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>☕</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>브런치</div>
              </div>
              <div style={{background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minWidth: '140px'}}>
                <div style={{background: '#f59e0b', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', marginBottom: '8px', display: 'inline-block'}}>MANUAL</div>
                <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>💬</div>
                <div style={{fontSize: '0.9rem', fontWeight: '600', color: '#333'}}>카카오 채널</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">왜 Holy AI Studio인가?</h2>
          <p className="section-subtitle">AI의 힘으로 콘텐츠 제작의 모든 고민을 해결합니다</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '50px'}}>
            <div style={{background: 'white', padding: '40px 30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>⏰</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px', color: '#333'}}>99% 시간 절약</h3>
              <p style={{color: '#666'}}>11개 플랫폼 콘텐츠를 5분만에 생성</p>
            </div>
            <div style={{background: 'white', padding: '40px 30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>🎯</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px', color: '#333'}}>플랫폼 최적화</h3>
              <p style={{color: '#666'}}>각 플랫폼에 맞는 완벽한 콘텐츠</p>
            </div>
            <div style={{background: 'white', padding: '40px 30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>📈</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px', color: '#333'}}>바이럴 보장</h3>
              <p style={{color: '#666'}}>AI가 분석한 바이럴 요소 적용</p>
            </div>
            <div style={{background: 'white', padding: '40px 30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '20px'}}>✨</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px', color: '#333'}}>완전 자동화</h3>
              <p style={{color: '#666'}}>클릭 한 번으로 모든 것 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>지금 시작하면 200 크레딧 무료!</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9'}}>베타 테스트 참여자에게만 제공되는 특별 혜택</p>
          <a href="/register" className="btn-hero">✅ 지금 무료로 시작하기</a>
        </div>
      </section>
    </div>
  )
}