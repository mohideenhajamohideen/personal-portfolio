export default function Tech() {
  const technologies = [
    "Amazon Bedrock / SageMaker",
    "OpenAI GPT‑4 / DALL·E 3",
    "LangChain & LlamaIndex",
    "Vector DBs (Pinecone, Weaviate)",
    "RAG & agentic workflows",
    "AWS Lambda / Step Functions",
    "EKS / Kubernetes / Helm",
    "Terraform / AWS CDK / Pulumi",
    "CI/CD (GitHub Actions)",
    "MLOps (MLflow, SageMaker Pipelines)",
    "FinOps & Sustainability",
    "Observability (CloudWatch + Grafana)",
    "Data eng. (Spark, Glue, Athena)",
    "Event‑driven microservices",
    "Security by design (IAM, KMS)",
    "Edge & Outposts deployments",
  ];

  return (
    <section id="tech" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies &amp; Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I help teams move from proof‑of‑concept to production at scale—combining deep cloud experience 
            with the latest in generative‑AI engineering and data operations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">16+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Core Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Cloud Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Learning Mindset</div>
          </div>
        </div>
      </div>
    </section>
  );
}
