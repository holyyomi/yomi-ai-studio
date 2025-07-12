import NextAuth from 'next-auth'

const handler = NextAuth({
  providers: [],
  // 임시 설정
})

export { handler as GET, handler as POST }
