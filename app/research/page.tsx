export default function Research() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">Research & Academic Work</h1>
        <p className="text-xl text-gray-600 mb-12">
          Daniel's research focuses on advancing our understanding of trauma, substance abuse, and therapeutic interventions 
          through rigorous academic inquiry and evidence-based methodologies.
        </p>
      </section>

      {/* Current Research */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Current Research Focus</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Clinical Psychology Studies</h3>
            <p className="text-gray-600 mb-4">
              Currently pursuing advanced research in Clinical Psychology at the University of South Wales, 
              focusing on evidence-based therapeutic interventions and their effectiveness across diverse populations.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Trauma-informed therapy approaches</li>
              <li>• Cross-cultural psychological assessment</li>
              <li>• Integration of spiritual and psychological healing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Ongoing Projects</h3>
            <p className="text-gray-600 mb-4">
              Leading multiple research initiatives examining the intersection of childhood trauma, 
              substance abuse, and therapeutic outcomes in various clinical settings.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Longitudinal studies on trauma recovery</li>
              <li>• Effectiveness of CBT and DBT interventions</li>
              <li>• Family therapy outcome research</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Primary Research Areas</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="card border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Trauma & PTSD</h3>
            <p className="text-gray-600 mb-4">
              Investigating trauma manifestations, nonverbal expressions, and the development of 
              trauma-sensitive therapeutic approaches.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Nonverbal trauma indicators</li>
              <li>• PTSD assessment tools</li>
              <li>• Trauma-informed care protocols</li>
              <li>• Cross-cultural trauma responses</li>
            </ul>
          </div>

          <div className="card border-l-4 border-orange-600">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Substance Abuse</h3>
            <p className="text-gray-600 mb-4">
              Examining the psychological and socio-economic factors contributing to substance abuse 
              across different populations and age groups.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Adolescent substance abuse patterns</li>
              <li>• Peer influence and social rejection</li>
              <li>• Parental monitoring effects</li>
              <li>• Treatment outcome predictors</li>
            </ul>
          </div>

          <div className="card border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Family & Relationship Therapy</h3>
            <p className="text-gray-600 mb-4">
              Researching the impact of childhood trauma on adult relationships and the effectiveness 
              of therapeutic interventions for couples and families.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Childhood trauma effects on marriage</li>
              <li>• Stress inoculation therapy</li>
              <li>• Cognitive behavioral interventions</li>
              <li>• Family dynamics assessment</li>
            </ul>
          </div>

          <div className="card border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Clinical Assessment</h3>
            <p className="text-gray-600 mb-4">
              Developing and validating psychological assessment tools and diagnostic approaches 
              for various mental health conditions.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Diagnostic tool development</li>
              <li>• Assessment protocol validation</li>
              <li>• Cross-cultural adaptation</li>
              <li>• Reliability and validity studies</li>
            </ul>
          </div>

          <div className="card border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Therapeutic Interventions</h3>
            <p className="text-gray-600 mb-4">
              Evaluating the effectiveness of evidence-based therapies including CBT, DBT, 
              and stress inoculation across diverse clinical populations.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• CBT effectiveness studies</li>
              <li>• DBT outcome research</li>
              <li>• Stress inoculation protocols</li>
              <li>• Treatment adherence factors</li>
            </ul>
          </div>

          <div className="card border-l-4 border-indigo-600">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Cross-Cultural Psychology</h3>
            <p className="text-gray-600 mb-4">
              Exploring psychological phenomena across different cultural contexts, particularly 
              focusing on Nigerian and UK populations.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cultural adaptation of therapies</li>
              <li>• Cross-cultural validation</li>
              <li>• Indigenous healing integration</li>
              <li>• Migration and mental health</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Research Methodology & Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Quantitative Methods</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Randomized controlled trials (RCTs)</li>
              <li>• Longitudinal cohort studies</li>
              <li>• Cross-sectional surveys</li>
              <li>• Statistical analysis and modeling</li>
              <li>• Psychometric validation studies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Qualitative Approaches</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• In-depth interviews</li>
              <li>• Focus group discussions</li>
              <li>• Case study methodology</li>
              <li>• Thematic analysis</li>
              <li>• Phenomenological research</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Research Impact & Applications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Published Papers</div>
            <div className="text-sm text-gray-500 mt-2">In peer-reviewed journals</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-gray-600">Research Areas</div>
            <div className="text-sm text-gray-500 mt-2">Primary focus domains</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
            <div className="text-gray-600">Years</div>
            <div className="text-sm text-gray-500 mt-2">Active research experience</div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-blue-600 text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Research Collaboration</h2>
        <p className="text-xl mb-6 opacity-90">
          Daniel actively collaborates with researchers, institutions, and healthcare organizations 
          to advance psychological research and improve therapeutic outcomes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Current Collaborations</h3>
            <ul className="space-y-2 opacity-90">
              <li>• University research partnerships</li>
              <li>• Hospital-based clinical studies</li>
              <li>• International research networks</li>
              <li>• Cross-institutional projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Seeking Partnerships</h3>
            <ul className="space-y-2 opacity-90">
              <li>• Multi-site clinical trials</li>
              <li>• Cross-cultural validation studies</li>
              <li>• Longitudinal research projects</li>
              <li>• Grant-funded investigations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}