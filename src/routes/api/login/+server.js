import { json } from '@sveltejs/kit';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// Mock database - ganti dengan implementasi nyata
const users = [
  { id: 'admin', password: 'admin123', role: 'admin' }
];

export async function POST({ request }) {
  const { userId, password } = await request.json();
  
  // 1. Cari user di database
  const user = users.find(u => u.id === userId);
  
  // 2. Verifikasi kredensial
  if (!user || user.password !== password) {
    
    return json({ error: 'User ID atau password salah' }, { status: 401 });
  }
  

  // 3. Generate JWT token
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    import.meta.env.VITE_JWT_SECRET,
    { expiresIn: '1h' }
  );

  // 4. Set HTTP-Only Cookie
  const headers = {
    'Set-Cookie': cookie.serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 jam
      path: '/'
    })
  };

  return json({ message: 'Login berhasil' }, { headers });
}