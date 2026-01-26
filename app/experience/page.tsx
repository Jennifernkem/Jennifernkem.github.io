export default function Experience() {
  return (
    <div className="space-y-12">
      <section>
        <h1 style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}} className="text-4xl font-bold mb-8">Professional Experience</h1>
        <p style={{color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}} className="text-xl text-gray-600 mb-12">
          A comprehensive overview of Daniel's professional journey in psychology, counselling, and academic leadership.
        </p>
      </section>

      <div className="space-y-8">
        {/* Current Role */}
        <div className="card border-l-4 border-blue-600">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Counsellor</h3>
              <p className="text-lg text-blue-600">Freelance</p>
            </div>
            <span className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full">April 2023 – Present</span>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Provided counselling services to international students facing emotional and psychological challenges</li>
            <li>• Conducted psychological assessments and developed personalized intervention strategies</li>
            <li>• Facilitated patient resilience during illness through therapeutic conversations and coping strategies</li>
            <li>• Provided evidence-based therapy (CBT, DBT) to individuals and groups dealing with anxiety, depression, and stress</li>
            <li>• Conducted psychological evaluations, crisis interventions, and trauma-sensitive therapies</li>
          </ul>
        </div>

        {/* Hospital Psychology Role */}
        <div className="card border-l-4 border-green-600">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Professional Psychologist</h3>
              <p className="text-lg text-green-600">Hamdala Hospital, Ibadan; St. Leo Medical Centre, Lagos; Pama Specialist Hospital, Lagos</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">August 2023 – July 2024</span>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Performed comprehensive psychological evaluations and delivered evidence-based interventions for diverse patient populations</li>
            <li>• Addressed issues such as trauma, depression, anxiety, and substance abuse to promote mental well-being</li>
            <li>• Integrated psychological principles with spiritual and values-based approaches</li>
            <li>• Created individualized treatment plans to foster emotional resilience and personal growth for patients, families, and couples</li>
            <li>• Worked closely with multidisciplinary healthcare professionals to provide comprehensive patient care</li>
            <li>• Specialized in disability support services, working with patients with disabilities in hospital settings</li>
            <li>• Published research on trauma, depression, anxiety, substance abuse, and family therapy</li>
          </ul>
        </div>

        {/* Academic Leadership */}
        <div className="card border-l-4 border-orange-600">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Rector</h3>
              <p className="text-lg text-orange-600">Society of the Two Hearts of Love, Ibadan, Nigeria</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">September 2018 – August 2021</span>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Mentored students in personal, vocational, and spiritual development</li>
            <li>• Facilitated workshops and retreats to build resilience, critical thinking, and reflective practice</li>
            <li>• Provided academic and spiritual leadership to the formation community</li>
          </ul>
        </div>
      </div>

      {/* Key Achievements */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Key Professional Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Clinical Impact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Successfully treated diverse populations across multiple healthcare settings</li>
              <li>• Specialized expertise in trauma-sensitive therapy approaches</li>
              <li>• Innovative integration of spiritual and psychological counselling methods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Research Contributions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multiple peer-reviewed publications in leading psychology journals</li>
              <li>• Research focus on substance abuse, trauma, and family therapy</li>
              <li>• Founder of Didee Publications for academic research dissemination</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}