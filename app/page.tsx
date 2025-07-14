import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Clock, Target, TrendingUp, Sparkles, Upload, Download, FileText } from 'lucide-react'

// Holy AI Studio - Final Production Version

"use client"

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
        }
        
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .btn {
          display: inline-block;
          padding: 15px 30px;
          background: white;
          color: #667eea;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        .navbar {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #333;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .nav-menu {
          display: flex;
          gap: 30px;
          list-style: none;
        }
        
        .nav-link {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #667eea;
        }
        
        .nav-buttons {
          display: flex;
          gap: 15px;
        }
        
        .btn-login {
          padding: 8px 20px;
          color: #666;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .btn-signup {
          padding: 8px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .section {
          padding: 80px 0;
        }
        
        .platforms {
          background: #f8fafc;
        }
        
        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          margin-top: 50px;
        }
        
        .platform-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .platform-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .platform-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        
        .platform-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #333;
        }
        
        .feature-desc {
          color: #666;
          line-height: 1.6;
        }
        
        .cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        
        .cta h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          color: #333;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
        }
        
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .nav-menu { display: none; }
          .platforms-grid { grid-template-columns: repeat(3, 1fr); }
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* 네비게이션 */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">Holy AI Studio</div>
          </a>
          
          <ul className="nav-menu">
            <li><a href="/features" className="nav-link">기능소개</a></li>
            <li><a href="/pricing" className="nav-link">가격정책</a></li>
            <li><a href="/guide" className="nav-link">이용가이드</a></li>
            <li><a href="/contact" className="nav-link">문의하기</a></li>
          </ul>
          
          <div className="nav-buttons">
            <a href="/login" className="btn-login">로그인</a>
            <a href="/register" className="btn-signup">무료 시작</a>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="hero">
        <div className="container">
          <h1>11개 플랫폼,<br />한 번에 정복하세요</h1>
          <p>하나의 주제 입력으로 11개 SNS 플랫폼에 최적화된 콘텐츠를 자동 생성하는 AI 콘텐츠 스튜디오</p>
          <a href="/register" className="btn">⚡ 무료로 시작하기</a>
        </div>
      </section>

      {/* 플랫폼 섹션 */}
      <section className="section platforms">
        <div className="container">
          <h2 className="section-title">지원하는 플랫폼</h2>
          <p className="section-subtitle">11개 주요 SNS 플랫폼을 모두 지원합니다</p>
          
          <div className="platforms-grid">
            {[
              { name: '구글 블로그', icon: '📝' },
              { name: '인스타그램', icon: '📷' },
              { name: '페이스북', icon: '👥' },
              { name: '트위터', icon: '🐦' },
              { name: '링크드인', icon: '💼' },
              { name: '핀터레스트', icon: '📌' },
              { name: '네이버 블로그', icon: '🟢' },
              { name: '티스토리', icon: '📖' },
              { name: '브런치', icon: '☕' },
              { name: '카카오 채널', icon: '💬' },
              { name: '유튜브', icon: '🎥' }
            ].map((platform, index) => (
              <div key={index} className="platform-card">
                <div className="platform-icon">{platform.icon}</div>
                <div className="platform-name">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">왜 Holy AI Studio인가?</h2>
          <p className="section-subtitle">AI의 힘으로 콘텐츠 제작의 모든 고민을 해결합니다</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3 className="feature-title">99% 시간 절약</h3>
              <p className="feature-desc">11개 플랫폼 콘텐츠를 5분만에 생성</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">플랫폼 최적화</h3>
              <p className="feature-desc">각 플랫폼에 맞는 완벽한 콘텐츠</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">바이럴 보장</h3>
              <p className="feature-desc">AI가 분석한 바이럴 요소 적용</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">완전 자동화</h3>
              <p className="feature-desc">클릭 한 번으로 모든 것 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section cta">
        <div className="container">
          <h2>지금 시작하면 200 크레딧 무료!</h2>
          <p>베타 테스트 참여자에게만 제공되는 특별 혜택</p>
          <a href="/register" className="btn">✅ 지금 무료로 시작하기</a>
        </div>
      </section>
    </>
  )
}
