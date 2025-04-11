import 'server-only'
import { getSession } from '@/lib/session'

 
export const verifySession = async () => {
  const session = await getSession()
  console.log(session)
  return session.cookies;
}