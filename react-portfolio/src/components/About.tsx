export default function About() {
  const skills = [
    { category: "AI & ML", items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"] },
    { category: "Cloud", items: ["AWS", "Azure", "GCP", "Kubernetes"] },
    { category: "Development", items: ["Python", "JavaScript", "React", "Node.js"] },
    { category: "Data", items: ["Data Engineering", "Analytics", "Visualization", "ETL"] },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img
                src="/images/avatar.png"
                alt="Mohideen avatar"
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                As an AI Generalist, I bridge strategy and engineering—translating complex ideas 
                into secure, production‑ready systems that people love to use. From whiteboard 
                sketches to fully governed deployments, I guide organisations through cloud adoption, 
                generative‑AI acceleration and cost‑optimised operations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I weave sustainability and ethical practice into every milestone, ensuring that 
                innovation serves both business objectives and societal good.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
