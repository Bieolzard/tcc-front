// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  // Redireciona para a página de login
  redirect('/login');
  return null;
}
