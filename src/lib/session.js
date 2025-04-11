import "server-only"
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'


const sessionOptions = {
  password: process.env.RAND_KEY, //run openssl rand -base64 32 to generate a random pasaword
  cookieName: 'session',
  cookieOptions: {
    httpOnly: process.env.COOKIE_HTTP_ONLY,
    secure: process.env.NODE_ENV === 'productiom',
    sameSite: process.env.COOKIE_SAME_SITE,
    maxAge: process.env.COOKIE_MAX_AGE
  }
}

export const defaultSession = {
  isLoggedin: false
}

export async function getSession(){
  const session = await getIronSession(await cookies(),sessionOptions);

  // if(!session.isLoggedin){
  //   session.isLoggedin = defaultSession.isLoggedin
  // }
  
  return session;
}

export async function destroySession(){
  const session = await getSession();
  session.destroy()
}