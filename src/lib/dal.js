import 'server-only'
import { getSession } from '@/lib/session'

 
export const verifySession = cache(async () => {
  const session = await getSessiom()
 
  if (!session?.id && !session.isLoggedin) {
    redirect('/login')
  }
 
  return session;
}