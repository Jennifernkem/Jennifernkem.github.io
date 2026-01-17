export default function Contact() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Whether you're seeking counselling services, research collaboration, or professional consultation, 
          Daniel is available to discuss how he can support your needs.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div style={{width: '24px', height: '24px', backgroundColor: '#dbeafe', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg style={{width: '14px', height: '14px', color: '#2563eb'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:danieloffor048@gmail.com" className="text-blue-600 hover:underline">
                    danieloffor048@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div style={{width: '24px', height: '24px', backgroundColor: '#dcfce7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg style={{width: '14px', height: '14px', color: '#16a34a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+447350165627" className="text-green-600 hover:underline">
                    +44 7350 165627
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div style={{width: '24px', height: '24px', backgroundColor: '#f3e8ff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg style={{width: '14px', height: '14px', color: '#9333ea'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Cardiff, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Professional Links</h2>
            
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/in/daniel-offor-596073388/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">LinkedIn Profile</p>
                  <p className="text-gray-600 text-sm">Connect professionally</p>
                </div>
              </a>

              <a 
                href="https://www.didee-publications.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Didee Publications</p>
                  <p className="text-gray-600 text-sm">Research publications platform</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Services & Availability */}
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Services Available</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Individual Counselling</h3>
                <p className="text-gray-600">
                  One-on-one therapy sessions for anxiety, depression, trauma, and personal growth using evidence-based approaches.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Couples & Family Therapy</h3>
                <p className="text-gray-600">
                  Relationship counselling and family therapy integrating psychological and values-based approaches.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Psychological Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive psychological evaluations and diagnostic assessments for various mental health conditions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Research Collaboration</h3>
                <p className="text-gray-600">
                  Academic partnerships, research consultation, and collaborative studies in clinical psychology.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Consultation</h3>
                <p className="text-gray-600">
                  Expert consultation for healthcare professionals, institutions, and organizations.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-blue-50">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Current Availability</h2>
            <p className="text-gray-700 mb-4">
              Daniel is currently accepting new clients and research collaborations. He provides services both 
              in-person in Cardiff and via secure online platforms for international clients.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Response Time:</strong> Typically within 24-48 hours<br/>
              <strong>Languages:</strong> English<br/>
              <strong>Specializations:</strong> Trauma, Anxiety, Depression, Substance Abuse, Family Therapy
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-xl mb-8 opacity-90">
          Take the first step towards emotional well-being and personal growth
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="mailto:danieloffor048@gmail.com" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Send Email
          </a>
          <a 
            href="tel:+447350165627" 
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}