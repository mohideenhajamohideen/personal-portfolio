export default function Cta() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to accelerate your Cloud &amp; AI journey?
        </h2>
        <p className="mb-8 text-xl text-blue-100 max-w-2xl mx-auto">
          Whether you need a production‑ready architecture, cost optimisation, or a generative‑AI solution, I'm here to help.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
