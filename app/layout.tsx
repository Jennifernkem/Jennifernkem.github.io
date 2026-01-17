import React from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Daniel Offor Ojotule — Portfolio",
  description:
    "Clinical Psychologist, Researcher, Published Author, and Founder of Didee Publications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}>
        <div className="content-wrapper">
          <header style={{padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
            <nav style={{display: 'flex', gap: '32px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center'}}>
              <Link href="/" style={{textDecoration: 'none', color: '#000000', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Home</Link>
              <Link href="/about" style={{textDecoration: 'none', color: '#000000', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>About</Link>
              <Link href="/research" style={{textDecoration: 'none', color: '#000000', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Research</Link>
              <Link href="/publications" style={{textDecoration: 'none', color: '#000000', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Publications</Link>
              <Link href="/experience" style={{textDecoration: 'none', color: '#000000', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Experience</Link>
              <Link href="/contact" style={{textDecoration: 'none', color: '#000000', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s'}}>Contact</Link>
            </nav>
          </header>

          <main style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 24px'}}>{children}</main>
        </div>
      </body>
    </html>
  );
}
