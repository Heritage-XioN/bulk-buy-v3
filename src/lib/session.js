import "server-only"
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'


const sessionOptions = {
  password: , //run openssl rand -base64 32 to generate a random pasaword
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

export async function getSession( jwt, id, name, email, role, isLoggedin){
  const session = await getIronSession(cookies(),sessionOptions);
  
  session.jwt = jwt;
  session.id = id;
  session.name = name;
  session.email = name;
  session.role = role;
  session.isLoggedin = isLoggedin;
  
  if(!session.isLoggedin){
    session.isLoggedin = defaultSession.isLoggedin
  }
  
  return session;
}

export async function destroySession(){
  const session = await getSession();
  session.destroy()
}