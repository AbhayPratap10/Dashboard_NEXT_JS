import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata ={
  title: 'Acme Dashboard',
  description: 'The official NEx.js course Dashboard, built with App Router.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>{children}</body>
    </html>
  );
}
