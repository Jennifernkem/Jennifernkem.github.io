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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}>
        <div className="content-wrapper">
          <header style={{padding: '15px 16px', borderBottom: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
            <nav style={{display: 'flex', gap: '8px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center', fontSize: '13px'}}>
              <Link href="/" style={{textDecoration: 'none', color: '#ffffff', fontWeight: '700', padding: '6px 10px', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap'}}>Home</Link>
              <Link href="/about" style={{textDecoration: 'none', color: '#ffffff', fontWeight: '700', padding: '6px 10px', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap'}}>About</Link>
              <Link href="/research" style={{textDecoration: 'none', color: '#ffffff', fontWeight: '700', padding: '6px 10px', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap'}}>Research</Link>
              <Link href="/publications" style={{textDecoration: 'none', color: '#ffffff', fontWeight: '700', padding: '6px 10px', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap'}}>Publications</Link>
              <Link href="/experience" style={{textDecoration: 'none', color: '#ffffff', fontWeight: '700', padding: '6px 10px', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap'}}>Experience</Link>
              <Link href="/contact" style={{textDecoration: 'none', color: '#ffffff', fontWeight: '700', padding: '6px 10px', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap'}}>Contact</Link>
            </nav>
          </header>

          <main style={{maxWidth: '1200px', margin: '0 auto', padding: '20px 16px'}}>{children}</main>
        </div>
      </body>
    </html>
  );
}
