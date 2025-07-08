export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Mohideen</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">About</a>
              <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Work</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            AI Generalist. Cloud Architect.
            <br />
            <span className="text-blue-600">Outcome-Obsessed.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            From algorithms to architecture, I help enterprises and innovators build intelligent systems – faster, smarter, and greener.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              View My Work
            </a>
            <a href="#contact" className="border border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-blue-600">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/images/avatar.png"
                alt="Mohideen"
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 mb-8 object-cover"
              />
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Projects</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
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
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="/images/ull-outpost.png" alt="AWS Outpost" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Infrastructure</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  2nd Gen Outpost for ultra low latency workloads
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Architected an ultra-low latency AWS Outpost DR solution for regulated workloads.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">AWS Outpost</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">EC2 Bare Metal</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Direct Connect</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="/images/budgets-dashboard.png" alt="AWS Budgets" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">FinOps</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  AWS Budgets Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Created org-wide QuickSight FinOps dashboards to monitor and optimise AWS spend.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">QuickSight</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">AWS Budgets</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Python</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="/images/ai-contract-mgmt.png" alt="Contract AI" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Gen AI</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Contract Understanding AI
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  LLM-powered tool to extract and query contractual obligations using Bedrock and Claude.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Amazon Bedrock</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Claude</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">LangChain</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="/images/ai-linkedin-bot.png" alt="LinkedIn Bot" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Gen AI</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  AI-Driven LinkedIn Post Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Built a Telegram-to-LinkedIn AI assistant that auto-generates, revises, tones, and schedules posts.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">GPT-4</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Claude</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">DALL·E 3</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="/images/ai-automation.png" alt="AI Automation" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">Automation</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  AI-Driven Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Developed end-to-end AI-driven automations to monitor and recharge energy accounts seamlessly.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Puppeteer</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Python</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="/images/ai-social-content.png" alt="Social Content AI" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Gen AI</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  AI‑Driven Social Media Content Creation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Fully‑automated agentic workflow that ideates, writes, designs and posts cross‑platform social content.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">OpenAI GPT‑4</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Claude</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">DALL·E 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Let's start a conversation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you have a project in mind, need consultation, or just want to say hello, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Email</div>
                    <a href="mailto:hello@mohideen.dev" className="text-blue-600 hover:text-blue-700">hello@mohideen.dev</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-300">London, UK</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
