import { Hero } from '@/components/layout/hero'

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* 추후 추가될 섹션들 */}
      <div id="features"></div>
      <div id="pricing"></div>
      <div id="guide"></div>
      <div id="contact"></div>
    </div>
  )
}
