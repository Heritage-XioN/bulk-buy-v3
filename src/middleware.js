import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'


// 1. Specify protected and public routes
const protectedRoutes = ['/product_listing','/dashboard']
const publicRoutes = ['/login', '/signup', '/']
 
 export default async function middleware(req) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const session = await getSession()
 
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.id) {
    return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
  }
  
  // 5. Redirect to /products if the user is authenticated
  if (
    isPublicRoute &&
    session?.id &&
    !req.nextUrl.pathname.startsWith('/product_listing')
  ) {
    return NextResponse.redirect(new URL('/product_listing', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}