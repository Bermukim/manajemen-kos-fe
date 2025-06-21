// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const publicPaths = ['/login', '/api/login'];

export async function handle({ event, resolve }) {
  const path = event.url.pathname;
  
  if (publicPaths.some(p => path.startsWith(p))) {
    return resolve(event);
  }

  const token = event.cookies.get('auth_token');
  
  try {
    if (!token) throw new Error('No token');
    
    const decoded = jwt.verify(token, import.meta.env.VITE_JWT_SECRET);
    event.locals.user = {
      id: decoded.userId,
      role: decoded.role
    };
  } catch (err) {
    throw redirect(303, '/login');
  }

  return resolve(event);
}