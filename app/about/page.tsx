export default function About() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">About Daniel Ojotule Offor</h1>
        
        {/* Profile Section with Image Placeholder */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', alignItems: 'start', marginBottom: '32px'}}>
          <div className="card" style={{textAlign: 'center', padding: '32px'}}>
            <div style={{
              width: '200px',
              height: '240px',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(/images/daniel.photo.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <h3 style={{fontSize: '18px', fontWeight: '600', color: '#374151'}}>Daniel Ojotule Offor</h3>
            <p style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Clinical Psychologist & Researcher</p>
          </div>
          
          <div>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Daniel Ojotule Offor is a compassionate professional psychologist and counsellor with extensive expertise 
              in psychological assessments, evidence-based interventions, and holistic care. Based in Cardiff, United Kingdom, 
              he is dedicated to helping individuals, couples, and families achieve inner peace and emotional resilience.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With a unique background that combines clinical psychology with theological studies, Daniel brings a 
              comprehensive approach to mental health care. His work integrates psychological principles with 
              values-based approaches, creating individualized treatment plans that foster both emotional resilience 
              and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold">Master of Science – Clinical Psychology</h3>
            <p className="text-gray-600">University of South Wales, Wales, United Kingdom</p>
            <p className="text-sm text-gray-500">Expected 2026</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold">Master of Science – Psychology</h3>
            <p className="text-gray-600">Liverpool John Moore University, United Kingdom</p>
            <p className="text-sm text-gray-500">2023</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold">Theological Studies</h3>
            <p className="text-gray-600">Dominican Institute, Ibadan, Oyo State, Nigeria</p>
            <p className="text-sm text-gray-500">2018</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold">Bachelor of Arts – Philosophy</h3>
            <p className="text-gray-600">St Peter and Paul Catholic Major Seminary, Ibadan (University of Ibadan affiliation)</p>
            <p className="text-sm text-gray-500">2012</p>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Key Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Clinical Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Psychological Assessment and Diagnosis</li>
              <li>• Evidence-Based Interventions (CBT, DBT, Stress Inoculation)</li>
              <li>• Crisis Intervention and Trauma Care</li>
              <li>• Treatment Planning and Case Management</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Specialized Approaches</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Emotional and Wellbeing Support</li>
              <li>• Spiritual and Values-Based Counselling</li>
              <li>• Disability Support Services</li>
              <li>• Multicultural Counselling</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Research & Academic</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Research and Academic Writing</li>
              <li>• Statistical Analysis and Methodology</li>
              <li>• Publication and Peer Review</li>
              <li>• Conference Presentations</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Leadership & Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Project and Program Management</li>
              <li>• Team Collaboration and Supervision</li>
              <li>• Educational Leadership</li>
              <li>• Community Outreach</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Professional Philosophy</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Daniel's approach to psychology and counselling is rooted in the belief that true healing encompasses 
          both emotional and spiritual dimensions of human experience. By integrating evidence-based therapeutic 
          techniques with values-based counselling, he creates a safe, supportive environment where clients can 
          explore their challenges, develop coping strategies, and achieve lasting personal growth.
        </p>
      </section>
    </div>
  );
}