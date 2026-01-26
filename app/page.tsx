import Link from 'next/link';

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '64px'}}>
      {/* Hero Section */}
      <section style={{textAlign: 'center', padding: '60px 20px'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '24px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Daniel Ojotule Offor
        </h1>
        <p style={{fontSize: '20px', color: 'white', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Compassionate Professional Psychologist and Counsellor with expertise in psychological assessments, 
          evidence-based interventions, and holistic care, dedicated to helping individuals, couples, and families 
          achieve inner peace and emotional resilience.
        </p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
          <Link href="/research" className="btn-secondary">
            View Research
          </Link>
        </div>
      </section>

      {/* Key Areas */}
      <section style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px'}}>
        <div className="card" style={{textAlign: 'center'}}>
          <h3 style={{fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#3b82f6'}}>Clinical Psychology</h3>
          <p style={{color: '#4b5563', lineHeight: '1.6'}}>
            Specialized in CBT, DBT, trauma therapy, and evidence-based interventions for anxiety, depression, and substance abuse.
          </p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <h3 style={{fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#3b82f6'}}>Research & Publications</h3>
          <p style={{color: '#4b5563', lineHeight: '1.6'}}>
            Published researcher in trauma, substance abuse, and family therapy with contributions to leading journals.
          </p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <h3 style={{fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#3b82f6'}}>Holistic Counselling</h3>
          <p style={{color: '#4b5563', lineHeight: '1.6'}}>
            Integrating psychological knowledge with values-based approaches for comprehensive emotional and spiritual growth.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{textAlign: 'center', padding: '48px 24px', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', color: 'white', borderRadius: '12px', boxShadow: '0 8px 32px rgba(59, 130, 246, 0.25)'}}>
        <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '16px'}}>Ready to Connect?</h2>
        <p style={{fontSize: '20px', marginBottom: '24px', opacity: '0.9'}}>
          Whether you're seeking counselling services, research collaboration, or professional consultation
        </p>
        <Link href="/contact" style={{backgroundColor: 'rgba(255,255,255,0.95)', color: '#3b82f6', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s'}}>
          Contact Daniel
        </Link>
      </section>
    </div>
  );
}