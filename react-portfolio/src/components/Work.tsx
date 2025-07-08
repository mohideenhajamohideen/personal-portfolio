export default function Work() {
  const projects = [
    {
      title: "2nd Gen Outpost for ultra low latency workloads",
      description: "Architected an ultra-low latency AWS Outpost DR solution for regulated workloads.",
      tech: ["AWS Outpost", "EC2 Bare Metal", "Direct Connect", "Route 53"],
      tag: "Infrastructure",
      image: "/images/ull-outpost.png"
    },
    {
      title: "AWS Budgets Dashboard",
      description: "Created org-wide QuickSight FinOps dashboards to monitor and optimise AWS spend.",
      tech: ["QuickSight", "CUR", "AWS Budgets", "Python", "Lambda"],
      tag: "FinOps",
      image: "/images/budgets-dashboard.png"
    },
    {
      title: "Contract Understanding AI",
      description: "LLM-powered tool to extract and query contractual obligations using Bedrock and Claude.",
      tech: ["Amazon Bedrock", "Claude", "LangChain", "Pinecone", "Textract"],
      tag: "Gen AI",
      image: "/images/ai-contract-mgmt.png"
    },
    {
      title: "AI-Driven LinkedIn Post Automation",
      description: "Built a Telegram-to-LinkedIn AI assistant that auto-generates, revises, tones, and schedules posts.",
      tech: ["GPT-4", "Claude 4 Sonnet", "DALL·E 3", "Telegram Bot API"],
      tag: "Gen AI",
      image: "/images/ai-linkedin-bot.png"
    },
    {
      title: "AI-Driven Automation",
      description: "Developed end-to-end AI-driven automations to monitor and recharge energy accounts seamlessly.",
      tech: ["Node.js", "Puppeteer", "Python", "Cloud Scheduler"],
      tag: "Automation",
      image: "/images/ai-automation.png"
    },
    {
      title: "AI‑Driven Social Media Content Creation",
      description: "Fully‑automated agentic workflow that ideates, writes, designs and posts cross‑platform social content.",
      tech: ["OpenAI GPT‑4", "Claude", "DALL·E 3", "Stable Diffusion"],
      tag: "Gen AI",
      image: "/images/ai-social-content.png"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent projects showcasing AI innovation, cloud architecture, and automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {project.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and innovative projects.
            </p>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
